import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  status: "idle",
  error: "",
  event: {
    id: 0,
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
  },
  eventstatus: "",
  detailstatus: "",
};

export const fetchEvents = createAsyncThunk("fetch/Events", async () => {
  let response = await fetch("http://localhost:3000/events");
  return response.json();
});

export const getEventById = createAsyncThunk("get/Event", async (id) => {
  let response = await fetch("http://localhost:3000/events/" + id);
  return response.json();
});

export const addEvent = createAsyncThunk("add/Event", async (event) => {
  event.eCreatedBy = sessionStorage.getItem("username");
  event.eNumOfFav = 0;
  let response = await fetch(`http://localhost:3000/events`, {
    method: "POST",
    body: JSON.stringify(event),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  if (data !== null || data !== undefined) return Promise.resolve("success");
  return Promise.reject("failure");
});

export const deleteEvent = createAsyncThunk("delete/Event", async (id) => {
  let response = await fetch(`http://localhost:3000/events/` + id, {
    method: "DELETE",
  });
  return Promise.resolve("success");
});

const eventslice = createSlice({
  name: "events",
  initialState,
  reducers: {
    removeEventstatus: (state, action) => {
      state.eventstatus = "";
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.status = "success";
      state.events = action.payload;
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.status = "failure";
    });
    builder.addCase(getEventById.fulfilled, (state, action) => {
      state.detailstatus = "success";
      state.event = action.payload;
    });
    builder.addCase(getEventById.rejected, (state, action) => {
      state.detailstatus = "failure";
    });
    builder.addCase(addEvent.fulfilled, (state, action) => {
      state.eventstatus = "success";
      state.status = "idle";
    });
    builder.addCase(addEvent.rejected, (state, action) => {
      state.eventstatus = "failure";
      state.status = "idle";
    });
    builder.addCase(deleteEvent.fulfilled, (state, action) => {
      state.status = "idle";
    });
  },
});

export let { removeEventstatus } = eventslice.actions;
export default eventslice.reducer;
