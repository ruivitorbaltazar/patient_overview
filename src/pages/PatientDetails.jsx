import { useParams, Link } from 'react-router-dom';
import { usePatient } from '../hooks/usePatient';
import Loading from '../components/Loading';
import { formatDate, formatAge } from '../utils/date';

export default function PatientDetails() {
  const { id } = useParams();
  const { patient, loading } = usePatient(id);

  if (loading) {
    return <Loading />;
  }

  if (!patient) {
    return <p className="empty-state">Patient not found.</p>;
  }

  return (
    <main className="container">
      <Link to="/" className="back-button">← Back to overview</Link>

      <div className="patient-details-card">
        <img
          src={patient.photo}
          alt={`Photo of ${patient.name}`}
          className="patient-details-avatar"
        />

        <h1 className="patient-details-name">{patient.name}</h1>

        <p className="patient-details-meta">
          Age: {formatAge(patient.age)}
        </p>
        <p className="patient-details-meta">
          Last visit: {formatDate(patient.last_visit)}
        </p>
      </div>
    </main>
  );
}
