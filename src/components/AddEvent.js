import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "../redux/eventslice";

const initialState = {
  eName: "",
  eDate: "",
  eCity: "",
  eRegion: "",
  eType: "",
  eURL: "",
  eImage: "",
  eDescription: "",
  eCreatedBy: "",
  eNumOfFav: 0,
};

export default function AddEvent() {
  const [addedEvent, setAddedEvent] = useState(initialState);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let eventStatus = useSelector((state) => state.eventreducer.eventstatus);

  useEffect(() => {
    if (eventStatus === "success") navigate("/my-events");
  }, [eventStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEvent(addedEvent));
  };

  return (
    <div className="container">
      <p></p>
      <h3>Add New Event</h3>
      <p></p>
      <form>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Event Name
          </label>{" "}
          <input
            type="text"
            className="form-control"
            name="eName"
            value={addedEvent.eName}
            onChange={(e) =>
              setAddedEvent({ ...addedEvent, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Event Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Event Date
          </label>{" "}
          <input
            type="text"
            className="form-control"
            name="eDate"
            value={addedEvent.eDate}
            onChange={(e) =>
              setAddedEvent({ ...addedEvent, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Event Date"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Event City
          </label>{" "}
          <input
            type="text"
            className="form-control"
            name="eCity"
            value={addedEvent.eCity}
            onChange={(e) =>
              setAddedEvent({ ...addedEvent, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Event City"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Event Region
          </label>{" "}
          <input
            type="text"
            className="form-control"
            name="eRegion"
            value={addedEvent.eRegion}
            onChange={(e) =>
              setAddedEvent({ ...addedEvent, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Event Region"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Event Type
          </label>{" "}
          <input
            type="text"
            className="form-control"
            name="eType"
            value={addedEvent.eType}
            onChange={(e) =>
              setAddedEvent({ ...addedEvent, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Event Type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Event Description
          </label>{" "}
          <input
            type="text"
            className="form-control"
            name="eDescription"
            value={addedEvent.eDescription}
            onChange={(e) =>
              setAddedEvent({ ...addedEvent, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Event Description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Event URL
          </label>{" "}
          <input
            type="text"
            className="form-control"
            name="eURL"
            value={addedEvent.eURL}
            onChange={(e) =>
              setAddedEvent({ ...addedEvent, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Event URL"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Event Image
          </label>{" "}
          <input
            type="text"
            className="form-control"
            name="eImage"
            value={addedEvent.eImage}
            onChange={(e) =>
              setAddedEvent({ ...addedEvent, [e.target.name]: e.target.value })
            }
            id="formGroupExampleInput2"
            placeholder="Event Image"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          ADD
        </button>
      </form>
    </div>
  );
}
