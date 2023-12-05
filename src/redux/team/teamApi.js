import { api } from "../api/apoSlice";

const teamApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // * Create team
    createTeam: builder.mutation({
      query: (data) => ({
        url: "/teams",
        method: "POST",
        body: data,
      }),
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

export const { useCreateTeamMutation, useGetSingleTeamQuery } = teamApi;
