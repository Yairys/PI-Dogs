import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../Assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="topLeft">
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>
      </div>
      <div className="topCenter"></div>
      <div className="topRight">
        <Link
          className="navLink"
          exact
          to={"/create"}
        >Create a Dog here
        </Link>
      </div>
    </div>
  );
}
