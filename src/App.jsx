import { usePatients } from './hooks/usePatients';
import PatientList from './components/PatientList';
import PatientSearch from './components/PatientSearch';
import Loading from './components/Loading';

export default function App() {
  const { loading, patients, searchTerm, setSearchTerm } = usePatients();

  return (
    <main className="container">
      <h1>Patient Overview</h1>

      <PatientSearch value={searchTerm} onChange={setSearchTerm} />

      {loading ? (
        <Loading />
      ) : (
        <PatientList patients={patients} />
      )}
    </main>
  );
}
