import { jwtDecode } from "jwt-decode";
import React from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../AxiosInstance";

export const PrivateRoute = ({ children }) => {
  try {
    const token = localStorage.getItem("accessToken");
    let isLoggedIn = false;
    if (token) {
      const payload = jwtDecode(token);
      if (payload.exp > Date.now() / 1000) {
        isLoggedIn = true;
      }
    }
    if (isLoggedIn) {
      axiosInstance.defaults.headers.common["Authorization"] = `Token ${token}`;
      return children;
    } else {
      return <Navigate to="/signin" />;
    }
  } catch (error) {
    return <Navigate to="/signin" />;
  }
};

export const NonPrivateRoute = ({ children }) => {
  try {
    const token = localStorage.getItem("accessToken");
    let isLoggedIn = false;
    if (token) {
      const payload = jwtDecode(token);
      if (payload.exp > Date.now() / 1000) {
        isLoggedIn = true;
      }
    }
    if (isLoggedIn) {
      axiosInstance.defaults.headers.common["Authorization"] = `Token ${token}`;
      return <Navigate to="/dashboard" />;
    } else {
      return children;
    }
  } catch (error) {
    return children;
  }
};
