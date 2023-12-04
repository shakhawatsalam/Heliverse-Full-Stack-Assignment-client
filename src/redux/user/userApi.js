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
      invalidatesTags: ["user", "singleUser"],
    }),
    // * Get All User
    getAllUser: builder.query({
      query: (arg) => ({
        url: `/users`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["user"],
    }),

    // * get single user
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["singleUser"],
    }),
    // * delete single user
    deleteSingleUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
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
      invalidatesTags: ["singleUser"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUpdateSingleUserMutation,
  useCreateUserMutation,
  useDeleteSingleUserMutation,
} = userApi;
