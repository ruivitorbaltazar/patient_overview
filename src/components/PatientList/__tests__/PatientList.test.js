import { render, screen } from '@testing-library/react';
import PatientList from '.';

describe('PatientList Component', () => {
  test('renders no patients found message when patient list is empty', () => {
    render(<PatientList patients={[]} />);
    expect(screen.getByText('No patients found.')).toBeInTheDocument();
  });

  test('renders no patients found matching that name message when there is an error', () => {
    render(<PatientList patients={[{ id: 1, name: 'John Doe' }]} error={true} />);
    expect(screen.getByText('No patients found matching that name.')).toBeInTheDocument();
  });

  test('renders patient cards when patients are provided', () => {
    const patients = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    render(<PatientList patients={patients} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});
