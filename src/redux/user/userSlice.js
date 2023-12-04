import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   name: "",
  team: [],
  message: "",
};

const userSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addTeamMember: (state, action) => {
      const selectedMember = state.team.find(
        (t) => t.domain === action.payload.domain
      );
      const availability = state.team.find((t) => t.available !== true);
      if (selectedMember) {
        state.message = "The member is Already Exist";
        return;
      }
      if (action.payload.available === false) {
        state.message = "The member is not available";
        return;
      }
      state.team.push(action.payload);
      state.message = "";
    },
  },
});

export const { addTeamMember } = userSlice.actions;

export default userSlice.reducer;
