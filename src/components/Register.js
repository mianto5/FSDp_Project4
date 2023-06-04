import React, {useEffect, useState} from "react";
import {useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../redux/userslice'

const initialState = {
  "username":"",
  "password":"",
  "email":""
}

export default function Register() {

  const [user, setUser] = useState(initialState);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let registerStatus = useSelector((state)=> state.userreducer.registerstatus);

  useEffect(()=>{
    if(registerStatus === "success")
      navigate("/login");
  }, [registerStatus])

  console.log("registerStatus: ", registerStatus);

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(registerUser(user));
  }

  return (
    <div className="container">
      <h1>Register</h1>
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
            Email
          </label>{" "}
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Email"
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
          Register
        </button>
      </form>
    </div>
  );
}
