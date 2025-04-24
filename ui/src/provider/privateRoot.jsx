import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";


const PrivateRoot = () => {
  const navigate = useNavigate() 
  const role = (localStorage.getItem("role")); 

  useEffect(() => {
    if (role != "admin") {
      navigate("/");
    }
  }, [role, navigate]);

  return <Outlet />; 
};

export default PrivateRoot;
