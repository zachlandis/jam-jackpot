import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// READ

export const fetchGiveaways = createAsyncThunk("giveaways/fetchGiveaways", async () => {
  console.log("Initiate fetch")
  const response = await fetch("/giveaways");
  console.log(response)
  const giveaways = await response.json();
  return giveaways
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

export const updateGiveaway = createAsyncThunk(
  'giveaways/updateGiveaway',
  async ({ id, ...editedValues }, { dispatch }) => {
    try {
      const response = await fetch(`/giveaways/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedValues),
      });

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      const updatedGiveaway = await response.json();

      return updatedGiveaway;
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
    [updateGiveaway.fulfilled]: (state, action) => {
      console.log('updateGiveaway.fulfilled', action.payload);
      const updatedIndex = state.entities.findIndex((giveaway) => giveaway.id === action.payload.id)
      if (updatedIndex !== -1) {
        state.entities[updatedIndex] = action.payload;
      }
    }
  },
});

export const { giveawayAdded, giveawayUpdated } = giveawaysSlice.actions;
export default giveawaysSlice.reducer;