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
import Roles from "../../pages/Roles/Roles";
import Facility from "../../pages/Facility/Facility";
import LOCPage from "../../pages/LOC/LOC";
import Staffing from "../../pages/Staffing/Staffing";
import IncidentSeverityLevel from "../../pages/IncidentSeverityLevel/IncidentSeverityLevel";
import SLA from "../../pages/SLA/SLA";
import DataSeeder from "../../pages/DataSeeder/DataSeeder";
import Login from "../../pages/Auth/Login/Login";
import AccountActivation from "../../pages/Auth/AccountActivation/AccountActivation";
import Verification from "../../pages/Auth/Verification/Verification";
import Dailytask from "../../pages/CarePlanning/Dailytask/Dailytasklist";
import ResidentProfileDetail from "../../pages/ResidentProfileDetail/ResidentProfileDetail";
import RecordVitals from "../../pages/BedsideVital/RecordVitals";
import DashboardDon from "../../pages/Dashboard/DashboardDon";
import CostBiling from "../../pages/CarePlanning/Detail/CostBiling/CareCost";
import PreAdmission from "../../pages/PreAdmission/PreAdmission";
import CreateEditResident from "../../pages/CreateEditResident/CreateEditResident";
import Reassessment from "../../pages/Reassessment/Reassessment";
import AdmissionForm from "../../pages/AdmissionForm/AdmissionForm";
import CarePlanAcknow from "../../pages/CarePlanAcknowledgment/CarePlanAcknowledgment";
import ReportIncident from "../../pages/ReportIncident/ReportIncident";
import CarePlanList from "../../pages/CarePlanList/CarePlanList";
const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/account-activation" element={<AccountActivation />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/user-list" element={<UserList />} />
      <Route path="/user-list/add-user" element={<AddUser />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/facility" element={<Facility />} />
      <Route path="/level-of-care" element={<LOCPage />} />
      <Route path="/staffing" element={<Staffing />} />
      <Route path="/incident-severity" element={<IncidentSeverityLevel />} />
      <Route path="/sla" element={<SLA />} />
      <Route path="/data-seeder" element={<DataSeeder />} />
      <Route path="/" element={<Navigate to="/resident-list" replace />} />
      <Route path="/resident-list" element={<ResidentList />} />
      <Route path="/dashboard-nurse" element={<DashboardNurse />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/CostBiling" element={<CostBiling />} />
      <Route path="/Dailytask" element={<Dailytask />} />
      <Route path="/Reassessment" element={<Reassessment />} />
      <Route path="/resident/detail" element={<ResidentProfileDetail />} />
      <Route path="/RecordVital" element={<RecordVitals />} />
      <Route path="/dashboard-don" element={<DashboardDon />} />
      <Route path="/admission-form" element={<AdmissionForm />} />
      <Route path="/pre-admission" element={<PreAdmission />} />
      <Route path="/CarePlanAcknow" element={<CarePlanAcknow />} />
      <Route path="/ReportIncident" element={<ReportIncident />} />
      <Route path="/careplan/list" element={<CarePlanList />} />
      {/* create*/}
      <Route path="/resident/create" element={<CreateEditResident />} />
      {/* edit */}
      <Route path="/resident/edit/:id" element={<CreateEditResident />} />
    </Routes>
  );
};

export default Routing;
