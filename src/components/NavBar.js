import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
  let userLoggedIn = useSelector((state) => state.userreducer.userLoggedIn);
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
              <NavLink className="nav-link" aria-current="page" to="">
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
            {userLoggedIn && (
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
            {/* {userLoggedIn && (
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
            {userLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/profile">
                  Profile
                </NavLink>
              </li>
            )}
            {!userLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/login">
                  Log In
                </NavLink>
              </li>
            )}
            {!userLoggedIn && (
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
