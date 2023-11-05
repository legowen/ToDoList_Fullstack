import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, Children }) => {
  return user ? Children : <Navigate to="/login" />;
};

export default PrivateRoute;
