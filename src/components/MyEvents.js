import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../redux/eventslice";
import { Link, Outlet } from "react-router-dom";
import Event from "./Event";

export default function MyEvents() {
  const dispatch = useDispatch();
  const eState = useSelector((state) => state.eventreducer);
  const eStatus = eState.status;
  const events = eState.events;
  const eUsername = useSelector((state) => state.userreducer.username);

  useEffect(() => {
    if (eStatus === "idle") {
      console.log("eStatus is idle again!");
      dispatch(fetchEvents());
    }
  }, [eStatus]); /* tyto hranaté závorky jsou velmi důležité !! */

  let userEvents = events.filter((event) => event.eCreatedBy === eUsername);
  console.log("userEvents: ", userEvents);
  console.log("eStatus: ", eStatus);

  let pageContent = "";
  if (
    eStatus === "success" &&
    userEvents !== undefined &&
    userEvents.length > 0
  ) {
    pageContent = (
      <div className="container px-4 px-lg-5">
        <div className="row">
          <div className="col-md-8">
            <p></p>
            <h3>My Added Events</h3>
            <p></p>
            <Link className="btn btn-primary btn-sm" to={`add`}>
              ADD NEW EVENT
            </Link>
            {userEvents.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </div>
          <div className="col-md-4">
            <Outlet />
          </div>
        </div>
      </div>
    );
  } else {
    pageContent = (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <h3>My Added Events</h3>
            <p>No added events yet.</p>
            <Link to={`add`}>ADD NEW EVENT</Link>
          </div>
          <div className="col-md-4">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  return <div>{pageContent}</div>;
}
