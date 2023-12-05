import { api } from "../api/apoSlice";

const teamApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // * get single team
    getAllTeams: builder.query({
      query: () => ({
        url: `/teams`,
        method: "GET",
      }),
      providesTags: ["team"],
    }),
    // * Create team
    createTeam: builder.mutation({
      query: (data) => ({
        url: "/teams",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["team"],
    }),

    // * get single team
    getSingleTeam: builder.query({
      query: (id) => ({
        url: `/teams/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateTeamMutation,
  useGetSingleTeamQuery,
  useGetAllTeamsQuery,
} = teamApi;
