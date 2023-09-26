import React from "react";
import { useDispatch } from "react-redux";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// READ
export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
    return fetch("/users")
    .then((r) => r.json())
    .then((user) => user);
  });


// CREATE
export const signUpUser = createAsyncThunk(
  'users/signUpUser',
  async (userData, { dispatch }) => {
    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const newUser = await response.json();
      return newUser;
    } catch (error) {
      console.error('Failed to sign up', error);
      throw error;
    }
  }
);

// LOGOUT
export const logoutUser = () => (dispatch) => {
  fetch('/logout', {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        dispatch(logoutSuccess());
      } else {
        console.log('Logout failed');
      }
    })
    .catch((error) => {
      console.error('Error during logout:', error);
    });
};


// DELETE
export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (itemId, {dispatch}) => {
      try {
        const response = await fetch(`/users/${itemId}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete item');
        }
        dispatch(fetchUsers());
      } catch (error) {
        console.error('Failed to delete item:', error);
        throw error;
      }
    }
  );

// UPDATE
export const updateUser = createAsyncThunk(
    'users/updateUser',
    async ({ id, ...editedValues }, { dispatch }) => {
      try {
        const response = await fetch(`/users/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedValues),
        });
  
        if (!response.ok) {
          throw new Error('Failed to update item');
        }
  
        const updatedUser = await response.json();
        return updatedUser;
      } catch (error) {
        console.error('Failed to update item', error);
        throw error;
      }
    }
  );

  const logoutSuccess = () => ({
    type: 'users/logoutSuccess', // Update with your slice name
  });


const initialState = {
    entities: [],
    status: "idle,"
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdded(state, action) {
            state.entities.push(action.payload);
            },
        userDeleted(state, action) {
            state.entities = state.entities.filter((user) => user.id !== action.payload);
            },
              
    },
    extraReducers: {
        [fetchUsers.pending](state) {
            state.status = "loading"
        },
        [fetchUsers.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
        [deleteUser.pending](state) {
            state.status = "loading"
        },
        [deleteUser.fulfilled](state, action) {
            // Update state by filtering out the deleted user
            state.entities = state.entities.filter((user) => user.id !== action.meta.arg);
            state.status = 'idle';
        },
        [updateUser.pending](state) {
            state.status = "loading"
        },
        [updateUser.fulfilled](state, action) {
            const updatedIndex = state.entities.findIndex((user) => user.id === action.payload.id)
            if (updatedIndex !== -1) {
                state.entities[updatedIndex] = action.payload;
            }
            state.status = "idle"
        },
        [signUpUser.pending](state) {
          state.status = "loading"
        },
        [signUpUser.fulfilled](state, action) {
          state.entities.push(action.payload);
          state.isLoggedIn = true;
          state.currentUserId = action.payload.id;
          state.status = "idle";
        },
        [logoutUser.pending](state) {
          state.status = "loading"
        },
        [logoutUser.fulfilled](state, action) {
          const dispatch = useDispatch()
          dispatch(logoutSuccess());
          state.isLoggedIn = false;
          state.status = "idle"
        }
        
          
    },
})


export const { userAdded, userDeleted } = usersSlice.actions;
export default usersSlice.reducer;
