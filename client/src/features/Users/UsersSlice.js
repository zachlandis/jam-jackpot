import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";







// READ
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("/users");
  const users = await response.json();
  return users;
});

// CREATE
export const signUpUser = createAsyncThunk("users/signUpUser", async (userData) => {
  const response = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const user = await response.json();
  return user;
});


// LOGIN
export const loginUser = createAsyncThunk("users/loginUser", async (userData) => {
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    
    throw new Error("Failed to login");
  }
  const user = response.json();
  
  return user;
});


export const loadCurrentUser = createAsyncThunk(
  "users/loadCurrentUser",
  async () => {
    const response = await fetch("/current_user_info"); 
    if (!response.ok) {
      throw new Error("Failed to load current user");
    }
    const user = await response.json();
    return user;
  }
);

export const updateCurrentUser = (userData) => ({
  type: 'UPDATE_CURRENT_USER',
  payload: userData,
});


// LOGOUT
export const logoutUser = createAsyncThunk("users/logoutUser", async () => {
  try {
      const response = await fetch("/logout", {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to logout");
    }

    return;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
});

// DELETE
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    const response = await fetch(`/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    return;
  }
);

// UPDATE
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, ...editedValues }) => {
    const response = await fetch(`/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedValues),
    });
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    const user = await response.json();
    return user;
  }
);

export const logoutSuccess = () => ({
  type: "users/logoutSuccess",
});

const initialState = {
  entities: [],
  status: "idle",
  errors: null,
  currentUser: {},
  isAuthenticated: false,
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
    login(state, action) {
      state.isLoggedIn = true;
      state.isAuthenticated = true;
      state.currentUserId = action.payload.id;
      state.currentUser = action.payload;
    },
    updateCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    logoutUser(state) {
      state.currentUser = null;
      console.log('currentUser logged out')
    },
  },
  extraReducers: {
    [fetchUsers.pending](state) {
      state.status = "loading";
    },
    [fetchUsers.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    [deleteUser.pending](state) {
      state.status = "loading";
    },
    [deleteUser.fulfilled](state, action) {
      state.entities = state.entities.filter((user) => user.id !== action.meta.arg);
      state.status = "idle";
    },
    [updateUser.pending](state) {
      state.status = "loading";
    },
    [updateUser.fulfilled](state, action) {
      const updatedIndex = state.entities.findIndex(
        (user) => user.id === action.payload.id
      );
      if (updatedIndex !== -1) {
        state.entities[updatedIndex] = action.payload;
      }
      state.status = "idle";
    },
    [signUpUser.pending](state) {
      state.status = "loading";
    },
    [signUpUser.fulfilled](state, action) {
      state.entities.push(action.payload);
      state.isLoggedIn = true;
      state.currentUserId = action.payload.id;
      state.status = "idle";
    },
    [loginUser.pending](state) {
      state.status = "loading";
    },
    [loginUser.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isAuthenticated = true;
      state.currentUserId = action.payload.id;
      state.currentUser = action.payload
      state.status = "idle";
    },
    [loginUser.rejected]: (state, action) => {
      state.errors = action.payload; 
    },
    [logoutUser.pending](state) {
      state.status = "loading";
    },
    [logoutUser.fulfilled](state, action) {
      state.currentUserId = null;
      state.currentUser = null;
      state.isAuthenticated = true;
      state.errors = null
      state.status = "idle";
    },
    [loadCurrentUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    [loadCurrentUser.rejected]: (state, action) => {
      state.errors = action.error;
    },
  },
});

export const { userAdded, userDeleted } = usersSlice.actions;
export default usersSlice.reducer;
