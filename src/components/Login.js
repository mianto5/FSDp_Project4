import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, changeRegisterStatus, fetchUserByUsername } from "../redux/userslice";
const initialState = {
  username: "",
  password: "",
};

export default function Login() {
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.userreducer.loginstatus);

  useEffect(() => {
    dispatch(changeRegisterStatus());
    if (loginStatus === "success") {
      dispatch(fetchUserByUsername(user.username));
      navigate("/profile");
    } else if (loginStatus === "failure") setError("Invalid Credentials");
  }, [loginStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <div className="container px-4 px-lg-5">
      <p></p>
      <h3>Log In to Share Your Events</h3>
      <p style={{color:'red'}}>{error && error}</p>
      <p></p>
      <form>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Username:
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
          <p></p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password:
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
          <p></p>
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
