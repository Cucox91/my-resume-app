import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./features/home/Home";
import Login from "./features/auth/Login";
import ResumeDetail from "./features/home/ResumeDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./features/auth/Register";
import AdminDashboard from "./features/admin/AdminDashboard";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        {/* Main content area: grows to fill available space */}
        <div style={{ flex: 1, padding: "2em" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resume/:id" element={<ResumeDetail />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
