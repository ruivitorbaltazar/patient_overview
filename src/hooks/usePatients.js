import { useState, useEffect } from 'react';
import { fetchPatients, searchPatients } from '../api/patients';

export const usePatients = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [patients, setPatients] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm.trim() === '') {
      fetchData();
    }
  }, [searchTerm]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        if (searchTerm.trim() === '') {
          const data = await fetchPatients();
          setPatients(data);
        } else {
          const data = await searchPatients(searchTerm);
          setPatients(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm !== '') {
      fetchSearchResults();
    }
  }, [searchTerm]);

  return {
    loading,
    error,
    patients,
    searchTerm,
    setSearchTerm,
  };
};
