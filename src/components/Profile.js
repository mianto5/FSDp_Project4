import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, fetchUserByUsername} from "../redux/userslice";
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const isloggedin = useSelector((state) => state.userreducer.isloggedin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.userreducer.username);
  let user = useSelector((state) => state.userreducer.user);

  useEffect(() => {
    console.log("isloggedin: ", isloggedin)
    if (!isloggedin) {
      navigate("/login");
    }
    /* if(user.id === 0)   */dispatch(fetchUserByUsername(username));
  }, [user]);

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
