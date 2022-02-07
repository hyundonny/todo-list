import { useSelector } from 'react-redux';

import {
  getFilteredTodos,
  getFilteredTodoIds,
} from 'features/todos/todosSlice';

import TodoItem from 'features/todos/item';

import * as S from 'features/todos/list/styles';

function TodoList() {
  const todoIds = useSelector(getFilteredTodoIds);
  const todos = useSelector(getFilteredTodos);

  console.log(todos);
  console.log(todoIds);

  const renderedTodoItems = todoIds.map(id => (
    <TodoItem key={id} id={id}>
      {id}
    </TodoItem>
  ));

  return <S.TodoList>{renderedTodoItems}</S.TodoList>;
}

export default TodoList;
