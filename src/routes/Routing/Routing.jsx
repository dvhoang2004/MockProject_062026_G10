import React from "react";
// Add the import statements for the router components below:
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ResidentList from "../../pages/Resident/ResidentList";
import DashboardNurse from "../../pages/Dashboard/DashboardNurse";
import Review from "../../pages/CarePlanning/Review/Review";
import UserList from "../../pages/UserList/UserList";
import AddUser from "../../pages/AddUser/AddUser";
import Login from "../../pages/Auth/Login/Login";
import AccountActivation from "../../pages/Auth/AccountActivation/AccountActivation";
import Verification from "../../pages/Auth/Verification/Verification";
import Dailytask from "../../pages/CarePlanning/Dailytask/Dailytasklist";
import ResidentProfileDetail from "../../pages/ResidentProfileDetail/ResidentProfileDetail";
import RecordVitals from"../../pages/BedsideVital/RecordVitals"

const Routing = () => {
  return (
    <Routes>
      <Route path="/user-list" element={<UserList />} />
      <Route path="/user-list/add-user" element={<AddUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account-activation" element={<AccountActivation />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/" element={<Navigate to="/resident-list" replace />} />
      <Route path="/resident-list" element={<ResidentList />} />
      <Route path="/dashboard-nurse" element={<DashboardNurse />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/Dailytask" element={<Dailytask />} />
      <Route path="/resident/detail" element={<ResidentProfileDetail />} />
      <Route path="/RecordVital" element={<RecordVitals />} />

    </Routes>
  );
};

export default Routing;
