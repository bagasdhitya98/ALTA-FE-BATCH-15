import { createSlice } from "@reduxjs/toolkit";

interface ModeState {
  mode: boolean;
  language: boolean;
}

const initialState: ModeState = {
  mode: false,
  language: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
    },
    toggleLanguage: (state) => {
      state.language = !state.language;
    },
  },
});

export const { toggleMode, toggleLanguage } = modeSlice.actions;
export default modeSlice.reducer;
