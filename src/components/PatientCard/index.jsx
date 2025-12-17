import { formatDate, formatAge } from '../../utils/date';

export default function PatientCard({ patient }) {
  return (
    <div className="patient-card">
      <div className="patient-header">
        <img
          src={patient.photo}
          alt={`Photo of ${patient.name}`}
          className="patient-avatar"
        />

        <div>
          <h3 className="patient-name">{patient.name}</h3>
          <p className="patient-meta">Age: {formatAge(patient.age)}</p>
        </div>
      </div>

      <p className="patient-meta">
        Last visit: {formatDate(patient.last_visit)}
      </p>
    </div>
  );
};
