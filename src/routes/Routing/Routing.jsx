import React from "react";
import { Routes, Route } from "react-router-dom";

import UserList from "../../pages/UserList/UserList";
import Login from "../../pages/Auth/Login/Login";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
