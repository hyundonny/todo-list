import { createSlice } from '@reduxjs/toolkit';

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const initialState = 'light';

const themesSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeTheme(_, action) {
      return action.payload;
    },
  },
});

export const { changeTheme } = themesSlice.actions;

export default themesSlice.reducer;
