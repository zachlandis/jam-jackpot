import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// READ
export const fetchEntries = createAsyncThunk("entries/fetchEntries", () => {
    return fetch("/entries")
    .then((r) => r.json())
    .then((user) => user);
  });

// // DELETE
// export const deleteUser = createAsyncThunk(
//     'users/deleteUser',
//     async (itemId, {dispatch}) => {
//       try {
//         const response = await fetch(`/users/${itemId}`, {
//           method: 'DELETE',
//         });
  
//         if (!response.ok) {
//           throw new Error('Failed to delete item');
//         }
//         dispatch(fetchUsers());
//       } catch (error) {
//         console.error('Failed to delete item:', error);
//         throw error;
//       }
//     }
//   );

// // UPDATE
// export const updateUser = createAsyncThunk(
//     'users/updateUser',
//     async ({ id, ...editedValues }, { dispatch }) => {
//       try {
//         const response = await fetch(`/users/${id}`, {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(editedValues),
//         });
  
//         if (!response.ok) {
//           throw new Error('Failed to update item');
//         }
  
//         const updatedUser = await response.json();
//         return updatedUser;
//       } catch (error) {
//         console.error('Failed to update item', error);
//         throw error;
//       }
//     }
//   );

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
        userDeleted(state, action) {
            state.entities = state.entities.filter((entry) => entry.id !== action.payload);
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
        // [deleteUser.pending](state) {
        //     state.status = "loading"
        // },
        // [deleteUser.fulfilled](state, action) {
        //     // Update state by filtering out the deleted user
        //     state.entities = state.entities.filter((user) => user.id !== action.meta.arg);
        //     state.status = 'idle';
        // },
        // [updateUser.pending](state) {
        //     state.status = "loading"
        // },
        // [updateUser.fulfilled](state, action) {
        //     const updatedIndex = state.entities.findIndex((user) => user.id === action.payload.id)
        //     if (updatedIndex !== -1) {
        //         state.entities[updatedIndex] = action.payload;
        //     }
        //     state.status = "idle"
        },
        
          

})


export const { entryAdded, entryDeleted } = entriesSlice.actions;
export default entriesSlice.reducer;
