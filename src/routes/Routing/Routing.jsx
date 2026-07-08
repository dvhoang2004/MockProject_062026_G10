import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// 1. Đổi tên import
import ResidentList from "../../pages/resident/ResidentList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/resident-list" replace />} />
      <Route path="/resident-list" element={<ResidentList />} />
    </Routes>
  );
};

export default Routing;
