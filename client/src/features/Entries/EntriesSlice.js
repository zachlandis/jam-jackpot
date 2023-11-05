import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {loadCurrentUser} from '../Users/UsersSlice'
// // CREATE
export const createEntry = createAsyncThunk(
  'entries/createEntry',
  async (newEntry, {dispatch}) => {
    try {
      const response = await fetch(`/entries`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry)
      });

      if (!response.ok) {
        throw new Error('Failed to create item');
      }
      dispatch(fetchEntries());
      dispatch(loadCurrentUser())
    } catch (error) {
      console.error('Failed to create item:', error);
      throw error;
    }
  }
);
  
// READ
export const fetchEntries = createAsyncThunk("entries/fetchEntries", () => {
    return fetch("/entries")
    .then((r) => r.json())
    .then((user) => user);
  });

// // DELETE
export const deleteEntry = createAsyncThunk(
    'entries/deleteEntry',
    async (itemId, {dispatch}) => {
      try {
        const response = await fetch(`/entries/${itemId}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete item');
        }
        dispatch(fetchEntries());
      } catch (error) {
        console.error('Failed to delete item:', error);
        throw error;
      }
    }
  );

// // UPDATE
export const updateEntry = createAsyncThunk(
    'entries/updateEntries',
    async ({ id, ...editedValues }, { dispatch }) => {
      console.log('Edited Values:', editedValues);

      try {
        const response = await fetch(`/entries/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedValues),
        });
  
        if (!response.ok) {
          throw new Error('Failed to update item');
        }
  
        const updatedEntries = await response.json();
        dispatch(loadCurrentUser())
        return updatedEntries;
      } catch (error) {
        console.error('Failed to update item', error);
        throw error;
      }
    }
  );

const initialState = {
    entities: [],
    status: "idle,"
};

const entriesSlice = createSlice({
    name: "entries",
    initialState,
    reducers: {
        entryAdded(state, action) {
            state.entities.push(action.payload);
            },
        entryDeleted(state, action) {
            state.entities = state.entities.filter((entry) => entry.id !== action.payload);
            },
        entryAdded(state, action) {
          state.entities.push(action.payload)
        },
        entryDeleted(state, action) {
          state.entities = state.entities.find((entry) => entry.id !== action.payload)
        },
              
    },
    extraReducers: {
        [fetchEntries.pending](state) {
            state.status = "loading"
        },
        [fetchEntries.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
        [deleteEntry.pending](state) {
            state.status = "loading"
        },
        [deleteEntry.fulfilled](state, action) {
            state.entities = state.entities.filter((entry) => entry.id !== action.meta.arg);
            state.status = 'idle';
        },
        [updateEntry.pending](state) {
            state.status = "loading"
        },
        [updateEntry.fulfilled](state, action) {
            const updatedIndex = state.entities.findIndex((entry) => entry.id === action.payload.id)
            if (updatedIndex !== -1) {
                state.entities[updatedIndex] = action.payload;
            }
            state.status = "idle"
        },
        [createEntry.pending](state) {
          state.status = "loading"
        },
        [createEntry.fulfilled](state, action) {
            state.entities.push(action.payload)
            state.status = "idle"
        },
          
    }
})


export const { entryAdded, entryDeleted } = entriesSlice.actions;
export default entriesSlice.reducer;