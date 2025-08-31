import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Screens/Dashboard';
import Login  from './Screens/Login';
import ProtectedRoute from './ProtectedRoute';
import Bucket from "./Screens/Bucket";

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
      <Route path="/bucket" element={<Bucket />} />
    </Routes>
    </div>
  );
}