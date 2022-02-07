import styled from 'styled-components';

export const TodoList = styled.ul`
  overflow: hidden;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  margin-top: 1rem;
  box-shadow: ${({ theme }) => theme.conditional.color.shadow};
  transition: box-shadow 500ms ease;
`;
