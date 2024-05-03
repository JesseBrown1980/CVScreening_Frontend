import './App.css';
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/useAuth';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <Dashboard />
        } />
        <Route path="/dashboard" element={
          <Dashboard />
        } />
      </Routes>
    </AuthProvider>
  );
}

export default App;
