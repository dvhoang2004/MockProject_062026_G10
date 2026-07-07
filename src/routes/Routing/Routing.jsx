import React from "react";
// Bổ sung dòng import các thành phần của router dưới đây:
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "../../pages/Dashboard/dashboard-nurse";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Routing;
