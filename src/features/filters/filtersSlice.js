import { createSlice } from '@reduxjs/toolkit';

export const FILTERS = { ALL: 'all', ACTIVE: 'active', COMPLETED: 'completed' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: FILTERS.ALL,
  reducers: {
    filterChanged(_, action) {
      return action.payload;
    },
  },
});

export const { filterChanged } = filtersSlice.actions;
export default filtersSlice.reducer;
