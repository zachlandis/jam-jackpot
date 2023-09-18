import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGiveaways = createAsyncThunk("giveaways/fetchGiveaways", () => {
  return fetch("/giveaways")
    .then((r) => r.json())
    .then((giveaway) => giveaway);
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
      giveaway.title = action.payload.title;
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
  },
});

export const { giveawayAdded, giveawayUpdated } = giveawaysSlice.actions;
export default giveawaysSlice.reducer;
