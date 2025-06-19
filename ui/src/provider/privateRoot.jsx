import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoot = ({ allowedRole }) => {
  const role = localStorage.getItem("role");

  if (role !== allowedRole) {
    return <Navigate to="/pages/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoot;
