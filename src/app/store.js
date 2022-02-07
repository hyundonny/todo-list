import { configureStore } from '@reduxjs/toolkit';

import themesReducer from 'features/themes/themesSlice';
import todosReducer from 'features/todos/todosSlice';
import filtersReducer from 'features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    theme: themesReducer,
    todos: todosReducer,
    filters: filtersReducer,
  },
});
