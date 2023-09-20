import { configureStore } from "@reduxjs/toolkit";
import giveawaysReducer from "./features/Giveaway/giveawaysSlice";
import usersReducer from "./features/Users/UsersSlice.js";


const store = configureStore({
  reducer: {
    giveaways: giveawaysReducer,
    users: usersReducer,
  },
});

export default store;
