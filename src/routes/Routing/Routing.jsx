import React from "react";
// Add the import statements for the router components below:
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ResidentList from "../../pages/resident/ResidentList";
import DashboardNurse from "../../pages/Dashboard/DashboardNurse";
import Review from "../../pages/CarePlanning/Review/Review";
import UserList from "../../pages/UserList/UserList";
import Login from "../../pages/Auth/Login/Login";
import AccountActivation from "../../pages/Auth/AccountActivation/AccountActivation";
import Verification from "../../pages/Auth/Verification/Verification";

const Routing = () => {
  return (
    <Routes>
      <Route path="/user-list" element={<UserList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account-activation" element={<AccountActivation />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/" element={<Navigate to="/resident-list" replace />} />
      <Route path="/resident-list" element={<ResidentList />} />
      <Route path="/dashboard-nurse" element={<DashboardNurse />} />
      <Route path="/Review" element={<Review />} />
    </Routes>
  );
};

export default Routing;
