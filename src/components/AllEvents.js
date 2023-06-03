import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../redux/eventslice";
import Event from "./Event";

export default function AllEvents() {
  const dispatch = useDispatch();
  const eState = useSelector((state) => state.eventreducer);
  const eStatus = eState.status;
  const events = eState.events;

  console.log("eState: ", eState);
  console.log("eStatus: ", eStatus);
  console.log("events: ", events);
  useEffect(() => {
    if (eStatus === "idle") {
      dispatch(fetchEvents());
    }
  }, []); /* tyto hranaté závorky jsou velmi důležité !! */

  let pageContent = "";
  if (eStatus === "success") {
    pageContent = (
      <div className="container">
        <h3>All Available Events</h3>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    );
  }

  return <div>{pageContent}</div>;
}
