import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token'); // Get the token from localStorage

  return (
    <Routes>
        <Route
        {...rest}
        render={(props) =>
            token ? (
            <Component {...props} />
            ) : (
            <Navigate to="/login" />
            )
        }
        />
    </Routes>
  );
};

export default PrivateRoute;
