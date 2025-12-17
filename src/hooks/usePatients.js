import { useState, useEffect } from 'react';
import { fetchPatients } from '../api/patients';

export const usePatients = () => {
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const [patients, setPatients] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      // } catch (err) {
        // setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    loading,
    // error,
    patients: filteredPatients,
    searchTerm,
    setSearchTerm,
  };
};
