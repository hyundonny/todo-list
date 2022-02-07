import {
  createSlice,
  createSelector,
  createEntityAdapter,
  nanoid,
} from '@reduxjs/toolkit';
import { FILTERS } from 'features/filters/filtersSlice';

const todosAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    todoAdded: {
      reducer: todosAdapter.addOne,
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            date: new Date().toISOString(),
            completed: false,
          },
        };
      },
    },
    todoDeleted: todosAdapter.removeOne,
    completedTodosCleared(state) {
      const completedIds = Object.values(state.entities)
        .filter(todo => todo.completed)
        .map(todo => todo.id);
      todosAdapter.removeMany(state, completedIds);
    },
  },
});

export const {
  selectAll: selectAllTodos,
  selectIds: selectAllTodoIds,
  selectById: selectTodoById,
} = todosAdapter.getSelectors(state => state.todos);

export const { todoToggled, todoAdded, todoDeleted, completedTodosCleared } =
  todosSlice.actions;

export const getActiveTodoIds = createSelector(selectAllTodos, todos =>
  todos.filter(todo => !todo.completed),
);

export const getFilteredTodos = createSelector(
  selectAllTodos,
  state => state.filters,
  (todos, selectedFilter) => {
    if (selectedFilter === FILTERS.ALL) {
      return todos;
    }

    if (selectedFilter === FILTERS.ACTIVE) {
      return todos.filter(todo => !todo.completed);
    }

    return todos.filter(todo => todo.completed);
  },
);

export const getFilteredTodoIds = createSelector(
  getFilteredTodos,
  filteredTodos => filteredTodos.map(todo => todo.id),
);

export default todosSlice.reducer;
