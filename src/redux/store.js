import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apoSlice";
import teamSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    team: teamSlice,
  },
  middleware: (getDecadeMiddleware) =>
    getDecadeMiddleware().concat(api.middleware),
});
