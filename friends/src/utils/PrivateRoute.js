import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = () => ({ component: Components, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("authToken") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
