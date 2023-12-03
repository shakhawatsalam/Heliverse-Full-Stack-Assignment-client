import { api } from "../api/apoSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // * Create User
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    // * Get All User
    getAllUser: builder.query({
      query: (arg) => ({
        url: `/users`,
        method: "GET",
        params: arg,
      }),
    }),

    // * get single user
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    // * update single user
    updateSingleUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUpdateSingleUserMutation,
  useCreateUserMutation,
} = userApi;
