import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../Navbar/Navbar.css";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import Menu from "../../public/menu.svg";
import Close from "../../public/close.svg";

const Navbar = () => {
  function showSideBar() {
    const sideBar = document.querySelector(".side-bar");
    sideBar.style.display = "flex";
  }

  function closeSideBar() {
    const sideBar = document.querySelector(".side-bar");
    sideBar.style.display = "none";
  }

  return (
    <>
      <nav className="side-bar">
        <button onClick={closeSideBar}>
          <img src={Close} id="close-btn" />
        </button>
        <div className="navigation-links">
          <button onClick={closeSideBar}>
            <NavLink className="nav-links" to={"/"}>
              Home
            </NavLink>
          </button>
          <button onClick={closeSideBar}>
            <NavLink className="nav-links" to={"/about"}>
              About
            </NavLink>
          </button>

          <button onClick={closeSideBar}>
            <NavLink className="nav-links" to={"/projects"}>
              Projects
            </NavLink>
          </button>

          <button onClick={closeSideBar}>
            <NavLink className="nav-links" to={"/blog"}>
              Blog
            </NavLink>
          </button>
        </div>
        <div className="social-media">
          <a href="https://github.com/menukfernando" target="_blank">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/menuk-fernando/" target="_blank">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </nav>

      <nav>
        <div className="logo mobile">
          Menuk<span>Fernando</span>
        </div>
        <div className="navigation-links">
          <NavLink className="nav-links hideOnMobile" to={"/"}>
            Home
          </NavLink>
          <NavLink className="nav-links hideOnMobile" to={"/about"}>
            About
          </NavLink>
          <NavLink className="nav-links hideOnMobile" to={"/projects"}>
            Projects
          </NavLink>
          <NavLink className="nav-links hideOnMobile" to={"/blog"}>
            Blog
          </NavLink>
        </div>
        <div className="social-media">
          <a
            href="https://github.com/menukfernando"
            target="_blank"
            className="hideOnMobile"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/menuk-fernando/"
            target="_blank"
            className="hideOnMobile"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <button id="menu-btn" onClick={showSideBar}>
            <img src={Menu} alt="" className="menu-svg" />
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
