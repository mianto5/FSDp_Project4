import React from "react";

export default function EventDetail({ event }) {
  let pageContent = "";
  if (event !== undefined) {
    pageContent = (
      <div>
        EventDetail
        {/* <p>
          <h5>{event.eName}</h5>
        </p>
        <p>{event.eDate}</p>
        <p>{event.eRegion}</p> */}
      </div>
    );
  } else {
    pageContent = <div>Problem</div>;
  }

  return <div className="container mt-3">{pageContent}</div>;
}
