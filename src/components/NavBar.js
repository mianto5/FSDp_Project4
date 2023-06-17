import React from "react";
import "../style/NavBar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userslice";

export default function NavBar() {
  const isloggedin = useSelector((state) => state.userreducer.isloggedin);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userreducer.username);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <a className="navbar-brand" href="#!">
          <b>Find My Event</b>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
            {isloggedin && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/my-events"
                >
                  My Events
                </NavLink>
              </li>
            )}
            {/* {isloggedin && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/my-favourites"
                >
                  My Favourites
                </NavLink>
              </li>
            )} */}
            {isloggedin && (
              <div>
                <NavLink className="nav-link" to={`/profile/${username}`}>
                  {username}
                </NavLink>
              </div>
            )}
            {isloggedin && (
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={() => dispatch(logoutUser())}
                >
                  Logout
                </a>
              </li>
            )}
            {!isloggedin && (
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/login">
                  Log In
                </NavLink>
              </li>
            )}
            {!isloggedin && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
