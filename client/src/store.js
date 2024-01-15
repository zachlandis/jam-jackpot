import { configureStore } from "@reduxjs/toolkit";
import giveawaysReducer from "./features/Reducers/giveawaysSlice.js";
import usersReducer from "./features/Reducers/UsersSlice.js";
import entriesReducer from "./features/Reducers/EntriesSlice.js"
import prizesReducer from "./features/Reducers/PrizesSlice.js"


const store = configureStore({
  reducer: {
    giveaways: giveawaysReducer,
    users: usersReducer,
    entries: entriesReducer,
    prizes: prizesReducer,
  },
});

export default store;
