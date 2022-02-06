import { configureStore } from '@reduxjs/toolkit';

import themesReducer from 'features/themes/themesSlice';
import todosReducer from 'features/todos/todosSlice';

export const store = configureStore({
  reducer: { theme: themesReducer, todos: todosReducer },
});
