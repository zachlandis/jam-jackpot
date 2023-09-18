import { configureStore } from "@reduxjs/toolkit"
import giveawaysReducer from "./features/giveawaysSlice";

const store = configureStore({
    reducer: {
        giveaways: giveawaysReducer,
    },
})

export default store;