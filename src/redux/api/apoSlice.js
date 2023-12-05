import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://heliverse-tan.vercel.app/api/",
    baseUrl: "http://localhost:5000/api/",
  }),
  tagTypes: ["user", "singleUser"],
  endpoints: () => ({}),
});
