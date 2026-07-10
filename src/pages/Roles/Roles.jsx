import React from "react";

import "./Roles.css";
import RoleCard from "../../components/RoleCard/RoleCard";
import RoleMatrixCard from "../../components/RoleMatrix/RoleMatrix";
import { mockRoles, matrixRoles, matrixScreens } from "./mockRolesData";

const Roles = () => {
  return (
    <div className="roles-page">
      <div className="breadcrumb">Admin &gt; Roles</div>
      <h1 className="page-title">Role & Permission Matrix</h1>
      <p className="page-subtitle">
        Read-only reference — defines what each role can see and do across NHMS
      </p>

      <h2 className="section-title">Role Directory</h2>
      <div className="role-grid">
        {mockRoles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>

      <RoleMatrixCard roles={matrixRoles} screens={matrixScreens} />
    </div>
  );
};

export default Roles;
