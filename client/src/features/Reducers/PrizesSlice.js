import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { fetchGiveaways } from "./giveawaysSlice"

// READ

export const fetchPrizes = createAsyncThunk("prizes/fetchPrizes", () => {
  return fetch("/prizes")
  .then((r) => r.json())
  .then((prize) => prize);
});

// CREATE

export const createPrize = createAsyncThunk("prizes/createPrize", async (formData) => {
  const response = await fetch("/prize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  
  if (!response.ok) {
    throw new Error("Failed to create prize");
  }
  
  return response.json();
});

// DELETE

export const deletePrize = createAsyncThunk(
  'prizes/deletePrize',
  async (itemId, {dispatch}) => {
    try {
      const response = await fetch(`/prizes/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      dispatch(fetchPrizes());
    } catch (error) {
      console.error('Failed to delete item:', error);
      throw error;
    }
  }
);

export const updatePrize = createAsyncThunk(
  'prizes/updatePrize',
  async ({ id, ...editedValues }, { dispatch }) => {
    try {
      const response = await fetch(`/prizes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedValues),
      });

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      const updatedPrize = await response.json();
      dispatch(fetchGiveaways())

      return updatedPrize;
    } catch (error) {
      console.error('Failed to update item', error);
      throw error;
    }
  }
);







const initialState = {
  entities: [],
  status: "idle",
};

const prizesSlice = createSlice({
  name: "prizes",
  initialState,
  reducers: {
    prizeAdded(state, action) {
      state.entities.push(action.payload);
    },
    prizeDeleted(state, action) {
      state.entities = state.entities.filter((prize) => prize.id !== action.payload)
    },
  },
  extraReducers: {
    [fetchPrizes.pending](state) {
        state.status = "loading"
    },
    [fetchPrizes.fulfilled](state, action) {
        state.entities = action.payload;
        state.status = "idle";
    },
    [createPrize.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
    },
    [deletePrize.fulfilled]: (state, action) => {
      state.entities = state.entities.filter((prize) => prize.id !== action.payload)
    },
    [updatePrize.fulfilled]: (state, action) => {
      console.log('updatePrize.fulfilled', action.payload);
      const updatedIndex = state.entities.findIndex((prize) => prize.id === action.payload.id)
      if (updatedIndex !== -1) {
        state.entities[updatedIndex] = action.payload;
      }
    }
  },
});

export const { prizeAdded, prizeUpdated } = prizesSlice.actions;
export default prizesSlice.reducer;