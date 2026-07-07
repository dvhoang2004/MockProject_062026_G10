import React from "react";
import { Routes, Route } from "react-router-dom";

import UserList from "../../pages/UserList/UserList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
    </Routes>
  );
};

export default Routing;
