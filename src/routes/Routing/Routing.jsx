import React from "react";
import { Routes, Route } from "react-router-dom";

import UserList from "../../pages/UserList/UserList";
import Login from "../../pages/Auth/Login/Login";
import AccountActivation from "../../pages/Auth/AccountActivation/AccountActivation";
import Verification from "../../pages/Auth/Verification/Verification";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account-activation" element={<AccountActivation />} />
      <Route path="/verification" element={<Verification />} />
    </Routes>
  );
};

export default Routing;
