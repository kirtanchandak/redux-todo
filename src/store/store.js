import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/";

export const configureStore = {
  reducer: todoReducer,
};
