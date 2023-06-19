import React, { useState } from "react";
import { NavLink, useParams, createSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../redux/eventslice";
/* import EventDetail from "./EventDetail"; */

export default function Event({ event }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const username = useSelector((state) => state.userreducer.username);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    navigate("/my-events");
  };

  let pageContent = "";
  if (event !== undefined) {
    pageContent = (
      <div className="row mt-5">
        <div className="col-sm-6 col-md-6">
          <p>
            <img
              src={event.eImage}
              className="img-fluid rounded mb-4 mb-lg-0"
            />
          </p>
        </div>
        <div className="col-sm-6 col-md-6">
          <h5>{event.eName}</h5>
          <p>{event.eDate}</p>
          <p>{event.eRegion}</p>
          {/* <a className="btn btn-primary btn-sm" href={"/events/"+event.id}>
            More Info
          </a> */}
          {/* {event => <EventDetail event={event} /> } */}
          <NavLink className="btn btn-primary btn-sm" to={"/events/"+event.id}>
            More Info
          </NavLink>
          &nbsp;
          {username===event.eCreatedBy && (<button
              onClick={() => handleDelete(event.id)}
              type="button"
              className="btn btn-danger btn-sm text-white position-absolute"
            >
              Delete
            </button>)}
        </div>
      </div>
    );
  } else {
    pageContent = <div>No Events in the Database</div>;
  }

  return <div className="container mt-3">{pageContent}</div>;
}
