import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, fetchUserByUsername} from "../redux/userslice";
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const userLoggedIn = useSelector((state) => state.userreducer.userLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.userreducer.username);
  let user = useSelector((state) => state.userreducer.user);

  useEffect(() => {
    console.log("Profile userLoggedIn: ", userLoggedIn)
    if (!userLoggedIn) {
      navigate("/login");
    }
    /* if(user.id === 0) dispatch(fetchUserByUsername(username)); */
  }, [userLoggedIn]);

  return (
    <div className="container px-4 px-lg-5">
      <p></p>
      <h3>Hello {username}!</h3>
      <p></p>
      <p>
        <h5>Account Details:</h5>
      </p>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => dispatch(logoutUser())}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
