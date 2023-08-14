import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginGlobalContext } from "./LoginContext";

const Protected = ({ children }) => {
  const { login } = LoginGlobalContext();
  const navigate = useNavigate();
  const sessionData = JSON.parse(sessionStorage.getItem("formData")) || {};
  useEffect(() => {
    if (!sessionData.isLoggedIn) {
      navigate("login");
    }
  }, []);
  return sessionData.isLoggedIn && children;
};

export default Protected;
