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
        (t) => t.domain === action.payload.user.domain
      );
      const availability = state.team.find((t) => t.available !== true);
      if (selectedMember) {
        state.message = "The member is Already Exist";
        return state;
      }
      if (action.payload.user.available === false) {
        state.message = "This Person is not available";
        return state;
      }
      state.team.push(action.payload.user);
      state.message = "Person Added Successfully";
      return state;
    },

    updateMessage: (state) => {
      state.message = "";
    },
  },
});

export const { addTeamMember, updateMessage } = userSlice.actions;

export default userSlice.reducer;
