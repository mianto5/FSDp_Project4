import React from "react";
import "../style/NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      {/* styling navigační lišty ?? */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" to="#">
            FindMyEvent
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* konec stylingu navigační lišty */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/all-events"
                >
                  All Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/my-events"
                >
                  My Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/my-favourites"
                >
                  My Favourites
                </NavLink>
              </li>
              {/* <li className='nav-item'>
                    Log Out
                </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/login">
                  Log In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
