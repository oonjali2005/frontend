import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Dashboard from "./pages/Dashboard";
import ReportItem from "./pages/ReportItem";
import Browse from "./pages/Browse";
import ItemDetails from "./pages/ItemDetails";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/otp" element={<OTP />} />

        <Route path="/browse" element={<Browse />} />

        <Route
          path="/item/:id"
          element={<ItemDetails />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/report"
          element={
            <ProtectedRoute>
              <ReportItem />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>

    </div>
  );
}

export default App;