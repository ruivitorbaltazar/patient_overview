export default function PatientSearch({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search patients by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  );
}
