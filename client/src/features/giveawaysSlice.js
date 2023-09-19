import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGiveaways = createAsyncThunk("giveaways/fetchGiveaways", () => {
  return fetch("/giveaways")
    .then((r) => r.json())
    .then((giveaway) => giveaway);
});

// giveawaysSlice.js

export const createGiveaway = createAsyncThunk("giveaways/createGiveaway", async (formData) => {
  const response = await fetch("/giveaways", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to create giveaway");
  }

  return response.json();
});


const initialState = {
  entities: [],
  status: "idle",
};

const giveawaysSlice = createSlice({
  name: "giveaways",
  initialState,
  reducers: {
    giveawayAdded(state, action) {
      state.entities.push(action.payload);
    },
    giveawayUpdated(state, action) {
      const giveaway = state.entities.find(
        (giveaway) => giveaway.id === action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchGiveaways.pending](state) {
        state.status = "loading"
    },
    [fetchGiveaways.fulfilled](state, action) {
        state.entities = action.payload;
        state.status = "idle";
    },
    [createGiveaway.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
    },
  },
});

export const { giveawayAdded, giveawayUpdated } = giveawaysSlice.actions;
export default giveawaysSlice.reducer;
