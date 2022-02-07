import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todoAdded } from 'features/todos/todosSlice';

import * as S from 'features/todos/input/styles';

function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => setText(e.target.value);

  const handleKeyDown = e => {
    const trimmedText = text.trim();
    if (e.keyCode === 13 && trimmedText) {
      dispatch(todoAdded(trimmedText));
      setText('');
    }
  };

  return (
    <S.InputContainer>
      <S.Input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Create a new todo..."
      />
    </S.InputContainer>
  );
}

export default TodoInput;
