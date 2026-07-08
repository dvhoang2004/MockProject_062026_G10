import React from "react";
// Add the import statements for the router components below:
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "../../pages/Dashboard/dashboard-nurse";
import Review from "../../pages/CarePlanning/Review";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Review" element={<Review />} />
    </Routes>
  );
};

export default Routing;