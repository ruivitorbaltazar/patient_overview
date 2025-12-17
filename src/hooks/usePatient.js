import { useState, useEffect } from 'react';
import { fetchPatientById } from '../api/patients';

export const usePatient = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPatientById(id);
        setPatient(data);
      } catch (err) {
        setError(err.message);
        setPatient(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return {
    loading,
    error,
    patient,
  };
};
