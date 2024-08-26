import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => !!state.auth.token);
  return (
    <div>
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to={`/login?redirect=${location.pathname}`}></Navigate>
      )}
    </div>
  );
};

export default ProtectedRoute;
