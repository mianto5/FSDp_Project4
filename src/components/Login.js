import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, changeRegisterStatus } from "../redux/userslice";
const initialState = {
  "username":"",
  "password":""
}

export default function Login({ setStatus, setUsername }) {
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState();

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.userreducer.loginstatus);
  const registerStatus = useSelector(
    (state) => state.userreducer.registerstatus
  );

  console.log("loginStatus: ", loginStatus);

  useEffect(() => {
    dispatch(changeRegisterStatus());
    if (loginStatus === "success") navigate("/home");
    else if (loginStatus === "failure") setError("Invalid Credentials");
  }, [loginStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <p style={{ color: "red" }}>{error && error}</p>
      <form>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Username
          </label>{" "}
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password
          </label>{" "}
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </form>
    </div>
  );
}
