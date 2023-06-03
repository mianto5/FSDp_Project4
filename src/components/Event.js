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
        <div className="col-md-6">
          <p>
            <img src={event.eImage} className="img-fluid" />
          </p>
        </div>
        <div className="col-md-6">
          <p>{event.eName}</p>
          <p>{event.eDate}</p>
          <p>{event.eRegion}</p>
          {/* <div className="">
              { <button className="btn btn-warning" onClick={onAddToCart}>ADD TO CART</button> }
            </div> */}
        </div>
      </div>
    );
  } else {
    pageContent = <div>No Events in the Database</div>;
  }

  return <div className="container mt-3">{pageContent}</div>;
}
