import { configureStore } from "@reduxjs/toolkit";
import giveawaysReducer from "./features/Giveaway/giveawaysSlice";
import usersReducer from "./features/Users/UsersSlice.js";
import entriesReducer from "./features/Entries/EntriesSlice"
import prizesReducer from "./features/Prizes/PrizesSlice"


const store = configureStore({
  reducer: {
    giveaways: giveawaysReducer,
    users: usersReducer,
    entries: entriesReducer,
    prizes: prizesReducer,
  },
});

export default store;
