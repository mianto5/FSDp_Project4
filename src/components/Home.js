import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../redux/eventslice";

export default function Home() {
  const dispatch = useDispatch();
  const eState = useSelector((state) => state.eventreducer);
  const eStatus = eState.status;
  const events = eState.events;

  useEffect(() => {
    if (eStatus === "idle") {
      dispatch(fetchEvents());
    }
  }, [eStatus]);

  let last1event;
  let last2event;
  let last3event;
  console.log("last1event: ", last1event);

  let pageContent = "";
  if (eStatus === "success") {
    last1event = events[events.length - 1];
    console.log("last1event if success: ", last1event);
    last2event = events[events.length - 2];
    last3event = events[events.length - 3];
    pageContent = (
      /* Page Content*/
      <div className="container px-4 px-lg-5">
        {/* Heading Row*/}
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <h1 className="font-weight-light">Welcome to Find My Event!</h1>
            <p>
              Short description of Find My Event website. Short description of
              Find My Event website. Short description of Find My Event website.
              Short description of Find My Event website. Short description of
              Find My Event website. Short description of Find My Event website.
              Short description of Find My Event website. Short description of
              Find My Event website. Short description of Find My Event website.
              Short description of Find My Event website. Short description of
              Find My Event website. Short description of Find My Event website.
              Short description of Find My Event website. Short description of
              Find My Event website. Short description of Find My Event website.
            </p>
          </div>
          <div className="col-lg-5">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://cdn.kudyznudy.cz/files/d4/d4cd94fd-7dbc-4405-9f8e-f7eb95150ea6.webp?v=20230613095202"
              alt="..."
            />
          </div>
        </div>
        {/* Content Row*/}
        <div className="row gx-4 gx-lg-5">
          <h2 className="font-weight-light">Check Last Added Events</h2>
          <p></p>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{last1event.eName}</h4>
                <p className="card-text">
                  {last1event.eRegion}, {last1event.eDate}
                </p>
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={last1event.eImage}
                  alt="..."
                />
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{last2event.eName}</h4>
                <p className="card-text">
                  {last2event.eRegion}, {last2event.eDate}
                </p>
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={last2event.eImage}
                  alt="..."
                />
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{last3event.eName}</h4>
                <p className="card-text">
                  {last3event.eRegion}, {last3event.eDate}
                </p>
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={last3event.eImage}
                  alt="..."
                />
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>{pageContent}</div>;
}
