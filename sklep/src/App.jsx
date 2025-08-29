import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Screens/Dashboard';
import Login  from './Screens/Login';
import ProtectedRoute from './ProtectedRoute';

function About() {
  return <h1>About Page</h1>;
}

export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Login />} />
    </Routes>
    </div>
  );
}