import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { persistReducer } from "redux-persist";

// const persistedReducer = persistReducer()

export const store = configureStore({
    reducer: {
        contacts: contactsReducer
    },
});