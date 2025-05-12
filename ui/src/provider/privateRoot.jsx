import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";


const PrivateRoot = () => { 
  const role = (localStorage.getItem("role")); 

  
    if ( role !== "admin") {
      return <Navigate to="/pages/login" replace />
    }


  return <Outlet />; 
};

export default PrivateRoot;
