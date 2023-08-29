import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { LoginGlobalContext } from "./LoginContext";
import {isAuthenticated} from "../utils/AuthUtils";
const Protected = ({ children }) => {
  const navigate = useNavigate();
  // const { login } = LoginGlobalContext();
  // const sessionData = JSON.parse(sessionStorage.getItem("formData")) || {};
  // useEffect(() => {
  //   if (!sessionData.isLoggedIn) {
  //     navigate("login");
  //   }
  // }, []);
  // return sessionData.isLoggedIn && children;

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("login");
    }
  }, []);
  return isAuthenticated() && children;
};

export const PublicRoute = ({children})=>{
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, []);
  return !isAuthenticated() && children;
}

export default Protected;
