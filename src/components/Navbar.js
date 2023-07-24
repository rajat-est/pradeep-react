import React from "react";
// { useEffect, useState } 
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const [isChecked,setIsChecked] = useState(true);
  // console.log(isChecked)
  const colorTheme = (e)=>{
    document.body.style.backgroundColor= e.target.dataset.color;
  }
  return (
    <header className={`main_header ${props.mode}`}>
      <div className="container">
        <nav className="nav_bar">
          <ul className="d-flex">
            <li>
              <Link to="/">{props.home}</Link>
            </li>
            <li>
              <Link to="About">{props.about}</Link>
            </li>
            <li>
              <Link to="gallery">{props.gallery}</Link>
            </li>
          </ul>
        </nav>
          <p className="color_theme">
             <span onClick={colorTheme} data-color="red"></span>
             <span onClick={colorTheme} data-color="blue"></span>
             <span onClick={colorTheme} data-color="black"></span>
             <span onClick={colorTheme} data-color="gray"></span>
             <span onClick={colorTheme} data-color="lightblue"></span>
             <span onClick={colorTheme} data-color="lightcyan"></span>
          </p>
        {/* <div className="toggle_container">
          <input type="checkbox" checked={isChecked}  onChange={(e)=>{setIsChecked(e.target.checked)}}
          id="toggle_btn" />
          <label htmlFor="toggle_btn">Enable DarkMode</label>
        </div> */}
      </div>
    </header>
  );
}
//onClick={props.toggleMode}
Navbar.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  home: "home",
  about: "about",
  contact: "contact",
  gallery:"Gallery"
};
