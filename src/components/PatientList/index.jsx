import PatientCard from '../PatientCard';

export default function PatientList({ patients, error }) {
  if (patients.length === 0) {
    return <p className="empty-state">No patients found.</p>;
  }
  if (error) {
    return <p className="empty-state">No patients found matching that name.</p>;
  }

  return (
    <div className="patient-list">
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
}
