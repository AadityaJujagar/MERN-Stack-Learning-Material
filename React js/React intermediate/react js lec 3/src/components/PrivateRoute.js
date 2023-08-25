import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ loggedIn, children }) {
  if (loggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
