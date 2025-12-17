const API_URL = 'https://6902376bb208b24affe57f0c.mockapi.io/patients';

export async function fetchPatients() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch patients');
  }
  return response.json();
}

export async function fetchPatientById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch patient with id ${id}`);
  }
  return response.json();
}

export async function createPatient(patientData) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patientData),
  });
  if (!response.ok) {
    throw new Error('Failed to create patient');
  }
  return response.json();
}

export async function updatePatient(id, patientData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patientData),
  });
  if (!response.ok) {
    throw new Error(`Failed to update patient with id ${id}`);
  }
  return response.json();
}

export async function deletePatient(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete patient with id ${id}`);
  }
  return response.json();
}
