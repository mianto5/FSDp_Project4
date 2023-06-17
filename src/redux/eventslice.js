import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  status: "idle",
  error: "",
  user: { id: 0, eName: "", eDate: "", eCity: "", eRegion: "", eType: "", eURL: "",
  eImage: "", eDescription: "", eCreatedBy: "", eNumOfFav: 0},
  eventstatus: "",
};

export const fetchEvents = createAsyncThunk("fetch/Events", async () => {
  let response = await fetch("http://localhost:3000/events");
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
    builder.addCase(addEvent.fulfilled, (state, action) => {
      state.eventstatus = "success";
      state.status = "idle";
    });
    builder.addCase(addEvent.rejected, (state, action) => {
      state.eventstatus = "failure";
      state.status = "idle";
    });
  },
});

console.log(initialState.status);
export default eventslice.reducer;
