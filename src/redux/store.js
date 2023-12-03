import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apoSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDecadeMiddleware) =>
    getDecadeMiddleware().concat(api.middleware),
});
