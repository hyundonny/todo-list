import { useSelector } from 'react-redux';

import { selectAllTodoIds } from 'features/todos/todosSlice';

import TodoItem from 'features/todos/item';

import * as S from 'features/todos/list/styles';

function TodoList() {
  const todoIds = useSelector(selectAllTodoIds);

  const renderedTodoItems = todoIds.map(id => (
    <TodoItem key={id} id={id}>
      {id}
    </TodoItem>
  ));

  return <S.TodoList>{renderedTodoItems}</S.TodoList>;
}

export default TodoList;
