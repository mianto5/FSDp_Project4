import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../redux/eventslice";
import Event from "./Event";

export default function AllEvents() {
  const dispatch = useDispatch();
  const eState = useSelector((state) => state.eventreducer);
  const eStatus = eState.status;
  const events = eState.events;

  let sortedEvents = [...events].sort((a, b) => (a.eName > b.eName ? 1 : -1));

  console.log("eState: ", eState);
  console.log("eStatus: ", eStatus);
  console.log("events: ", events);
  useEffect(() => {
    if (eStatus === "idle") {
      dispatch(fetchEvents());
    }
  }, [eStatus]); 

  let pageContent = "";
  if (eStatus === "success") {
    pageContent = (
      <div className="container px-4 px-lg-5">
        <p></p>
        <h3>All Available Events</h3>
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-1 row-cols-lg-2 justify-content-center">
        {sortedEvents.map((event) => (
          <Event key={event.id} event={event} />
        ))}
        </div>
      </div>
    );
  }

  return <div>{pageContent}</div>;
}
