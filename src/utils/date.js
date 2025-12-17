export function formatDate(dateString) {
  if (!dateString) return '—';

  const date = new Date(dateString);
  return date.toLocaleDateString();
}

export function formatAge(dateOfBirth) {
  if (!dateOfBirth) return '—';

  const birthDate = new Date(dateOfBirth);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
