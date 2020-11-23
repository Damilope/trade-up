import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tradeProgramsReducer from "./programs/reducer";

const reducer = combineReducers({
    tradePrograms: tradeProgramsReducer,
});

const store = configureStore({
    reducer,
});

export default store;
