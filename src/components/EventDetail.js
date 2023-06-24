import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEventById } from "../redux/eventslice";

export default function EventDetail() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let event = useSelector((state) => state.eventreducer.event);
  let { id } = useParams();
  id = Number(id);

  useEffect(() => {
    dispatch(getEventById(id));
  }, [id]);

  let pageContent = "";
  if (event !== undefined) {
    pageContent = (
      <div className="container px-4 px-lg-5">
        <p></p>
        <h3>{event.eName}</h3>
        <p></p>
        <div className="row mt-5">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <p>
              <img
                src={event.eImage}
                className="img-fluid rounded mb-4 mb-lg-0"
              />
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <p>
              <b>Type:</b> {event.eType}
            </p>
            <p>
              <b>Date:</b> {event.eDate}
            </p>
            <p>
              <b>Location:</b> {event.eCity}, {event.eRegion}
            </p>
            <p>
              <b>Created By:</b> {event.eCreatedBy}
            </p>
          </div>
        </div>
        <p></p>
        <div className="col-xs-12 col-sm-10 col-md-10">
          <p>
            <b>Description:</b> {event.eDescription}
          </p>
          <p>
            <b>Original Website:</b> <a href={event.eURL}>{event.eURL}</a>
          </p>
        </div>
        <p></p>
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="btn btn-primary btn-sm"
        >
          Go Back
        </button>
      </div>
    );
  } else {
    pageContent = <div>There is no existing event with this ID.</div>;
  }

  return <div>{pageContent}</div>;
}
