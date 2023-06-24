import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  status: "idle",
  error: "",
  event: { id: 0, eName: "", eDate: "", eCity: "", eRegion: "", eType: "", eURL: "",
  eImage: "", eDescription: "", eCreatedBy: "", eNumOfFav: 0},
  eventstatus: "",
  detailstatus: ""
};

export const fetchEvents = createAsyncThunk("fetch/Events", async () => {
  let response = await fetch("http://localhost:3000/events");
  return response.json();
});

export const getEventById = createAsyncThunk("get/Event", async (id) => {
  let response = await fetch("http://localhost:3000/events/"+id);
  /* console.log("response.json(): ", response.json()) */
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
  console.log("Event data: ", data);
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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.status = "success";
      /* state.events = state.events.concat(action.payload); */
      state.events = action.payload;
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.status = "failure";
    });
    builder.addCase(getEventById.fulfilled, (state, action) => {
      state.detailstatus = "success";
      state.event = action.payload;
      /* console.log("action.payload: ", action.payload)
      console.log("state.event v eventslice: ", state.event) */
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

console.log(initialState.status);
export default eventslice.reducer;
