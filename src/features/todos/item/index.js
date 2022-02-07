import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ReactComponent as Cross } from 'assets/images/icon-cross.svg';
import { ReactComponent as Check } from 'assets/images/icon-check.svg';

import * as S from 'features/todos/item/styles';

import {
  selectTodoById,
  todoDeleted,
  todoToggled,
} from 'features/todos/todosSlice';

function TodoItem({ id }) {
  const todo = useSelector(state => selectTodoById(state, id));
  const dispatch = useDispatch();

  const handleDelete = e => {
    e.stopPropagation();
    dispatch(todoDeleted(id));
  };

  const handleToggle = () => {
    dispatch(todoToggled(id));
  };

  return (
    <S.TodoItem onClick={handleToggle}>
      <S.CompletedButton type="button" completed={todo.completed}>
        <Check />
      </S.CompletedButton>
      <S.TodoText completed={todo.completed}>{todo.text}</S.TodoText>
      <S.DeleteButton type="button" onClick={handleDelete}>
        <Cross />
      </S.DeleteButton>
    </S.TodoItem>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TodoItem;
