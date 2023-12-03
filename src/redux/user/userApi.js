import { api } from "../api/apoSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // * Get All User
    getAllUser: builder.query({
      query: (arg) => ({
        url: `/users`,
        method: "GET",
        params: arg,
      }),
    }),
  }),
});

export const { useGetAllUserQuery } = userApi;
