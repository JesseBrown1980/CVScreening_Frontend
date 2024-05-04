import { Route, Routes } from "react-router-dom";

import "./App.css";

import { AuthProvider } from "./context/useAuth";
import Navbar from "./nav/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
