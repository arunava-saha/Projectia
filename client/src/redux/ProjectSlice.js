import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  project: {},
};

const projectSlice = createSlice({
  name: "taskslice",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = [...action.payload];
    },
    setProject: (state, action) => {
      state.project = action.payload;
    },
    removeProject: (state, action) => {
      console.log(action.payload);
      state.projects.splice(action.payload, 1);
    },
  },
});

export const { setProject, setProjects, removeProject } = projectSlice.actions;

export default projectSlice.reducer;
