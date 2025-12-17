import { formatDate, formatAge } from '../../utils/date';

export default function PatientCard({ patient }) {
  return (
    <div className="patient-card">
      <h3 className="patient-name">{patient.name}</h3>

      <p className="patient-meta">
        Age: <strong>{formatAge(patient.age)}</strong>
      </p>

      <p className="patient-meta">
        Last visit: {formatDate(patient.last_visit)}
      </p>
    </div>
  );
};
