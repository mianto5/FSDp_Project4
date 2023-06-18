import React, { useState } from "react";
import { useParams, createSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Event({ event }) {
  /* let navigate = useNavigate(); */
  /* let dispatch = useDispatch(); */

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
          <p>
            <h5>{event.eName}</h5>
          </p>
          <p>{event.eDate}</p>
          <p>{event.eRegion}</p>
          <a className="btn btn-primary btn-sm" href="#!">
            More Info
          </a>
        </div>
      </div>
    );
  } else {
    pageContent = <div>No Events in the Database</div>;
  }

  return <div className="container mt-3">{pageContent}</div>;
}
