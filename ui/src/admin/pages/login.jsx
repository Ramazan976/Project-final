import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("role", JSON.stringify("admin"));
    navigate("/admin");
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
