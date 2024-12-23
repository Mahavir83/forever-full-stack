import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CustomRoutes = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default CustomRoutes;
