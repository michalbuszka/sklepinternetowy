import { Routes, Route, Link } from 'react-router-dom';
import Home from './Screens/Home';

function About() {
  return <h1>About Page</h1>;
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}