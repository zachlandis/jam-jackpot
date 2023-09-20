import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


// READ

export const fetchGiveaways = createAsyncThunk("giveaways/fetchGiveaways", () => {
  return fetch("/giveaways")
  .then((r) => r.json())
  .then((giveaway) => giveaway);
});

// CREATE

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

// DELETE

export const deleteGiveaway = createAsyncThunk(
  'giveaways/deleteGiveaway',
  async (itemId, {dispatch}) => {
    try {
      const response = await fetch(`/giveaways/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      dispatch(fetchGiveaways());
    } catch (error) {
      console.error('Failed to delete item:', error);
      throw error;
    }
  }
);




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
    giveawayDeleted(state, action) {
      state.entities = state.entities.filter((giveaway) => giveaway.id !== action.payload)
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
    [deleteGiveaway.fulfilled]: (state, action) => {
      state.entities = state.entities.filter((giveaway) => giveaway.id !== action.payload)
    },
  },
});

export const { giveawayAdded, giveawayUpdated } = giveawaysSlice.actions;
export default giveawaysSlice.reducer;
