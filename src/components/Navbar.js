import React, { useState } from "react";
// { useEffect, useState }
import { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ToggleButton from "./ToggleBtn";
import { ToggleContext } from "./ToggleContext";
import useOnline from "./CheckOnline";
import logo from "../img/logo.png";
import profile from "../img/profile.png";
import Sticky from "./Sticky";
import SearchComponent from "./SearchComponent";
import useLogOut from "./LogOut";
export default function Navbar(props) {
  const isOnline = useOnline();
  const logout = useLogOut();
  const { isToggled } = useContext(ToggleContext);
  const [navToggle, setNavToggle] = useState(false);
  const isSticky = Sticky();
  const sessionData = JSON.parse(sessionStorage.getItem("formData")) || {};
  const handleLogOut = () => {
    logout();
  };

  return (
    <header className={`main_header  ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        {sessionData.isLoggedIn === true ? (
          <nav className={`nav_bar ${navToggle ? "mobile-nav" : ""}`}>
            <ul className="d-flex">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {props.home}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/form"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Registration From
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {props.gallery}
                </NavLink>
              </li>
              {/* <li>
              <Link to="todo">{props.todo}</Link>
            </li> */}
              <li>
                <NavLink
                  to="/galleryTwo"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  GalleryTwo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/table"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Form Data Table
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Formik
                </NavLink>
              </li>
            </ul>
            <SearchComponent />
          </nav>
        ) : (
          ""
        )}

        <label htmlFor="check" className="mobile_menu_icon">
          <input
            type="checkbox"
            id="check"
            className=""
            onClick={() => setNavToggle((prevIsActive) => !prevIsActive)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
        {sessionData.isLoggedIn === false ||
        JSON.parse(sessionStorage.getItem("formData")) === null ? (
          <div className="signUpLoginContainer">
            {/* <p>{isOnline ? "Kelvin" : "Login"}</p> */}
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Login
            </NavLink>
            /
            <NavLink
              to="/signUp"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              SignUp
            </NavLink>
          </div>
        ) : (
          <div className="profile">
            <img src={profile} alt="profile" />
            <button className="btnLogOut" onClick={handleLogOut}>Log Out</button>
          </div>
        )}
      </div>
    </header>
  );
}
Navbar.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  home: "home",
  about: "about",
  contact: "contact",
  gallery: "Gallery",
  todo: "Todo",
};
