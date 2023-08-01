import React, { useState } from "react";
// { useEffect, useState }
import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleBtn";
import { ToggleContext } from './ToggleContext';
import useOnline from "./CheckOnline";
import logo from "../img/logo.png";
import profile from "../img/profile.png";
import Sticky from "./Sticky";
import SearchComponent from "./SearchComponent";
export default function Navbar(props) {
  const isOnline = useOnline();
  const {isToggled} = useContext(ToggleContext);
  const [navToggle,setNavToggle] = useState(false)
  const isSticky = Sticky();
  return (
    <header className={`main_header  ${isSticky ? 'sticky':"" }`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className= {`nav_bar ${navToggle ? 'mobile-nav' :''}`}>
          <ul className="d-flex">
            <li>
              <Link to="/"  >{props.home}</Link>
            </li>
            <li>
              <Link to="About" >{props.about}</Link>
            </li>
            <li>
              <Link to="gallery" >{props.gallery}</Link>
            </li>
            <li>
              <Link to="todo">{props.todo}</Link>
            </li>
          </ul>
          <SearchComponent searchData={props.searchData} setSearchData={props.setSearchData} />
        </nav>
        <label htmlFor="check" className="mobile_menu_icon">
                <input type="checkbox" id="check" className="" onClick={()=>setNavToggle((prevIsActive)=>!prevIsActive)} />
                <span></span>
                <span></span>
                <span></span>
            </label>
          <div className="profile">
            <img src={profile} alt="profile" />
            <p >{isOnline ? "Kelvin" : "Login"}</p>
          </div>
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
