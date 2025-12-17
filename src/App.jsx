import { Routes, Route } from 'react-router-dom';
import PatientOverview from './pages/PatientOverview';
import PatientDetails from './pages/PatientDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PatientOverview />} />
      <Route path="/patients/:id" element={<PatientDetails />} />
    </Routes>
  );
}
