import styled from 'styled-components';

export const TodoItem = styled.li`
  padding: 1.125rem;
  padding-left: 4.5rem;
  background-color: ${({ theme }) => theme.conditional.color.container};
  position: relative;
  cursor: pointer;
  transition: all 500ms ease;
  border-bottom: 1px solid ${({ theme }) => theme.conditional.color.border};
  user-select: none;
`;

export const TodoText = styled.span`
  position: relative;
  color: ${({ theme, completed }) =>
    completed
      ? theme.conditional.color.completed
      : theme.conditional.color.text};
  transition: color 200ms ease;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: ${({ completed }) => (completed ? '100%' : '0%')};
    height: 2px;
    transition: width 200ms ease;
    background: ${({ theme }) => theme.conditional.color.completed};
  }
`;

export const CompletedButton = styled.button`
  top: 50%;
  transform: translateY(-50%);
  left: 2rem;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.conditional.color.muted};
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  padding-bottom: 0.125rem;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme, completed }) =>
    completed
      ? theme.common.color.gradient
      : theme.conditional.color.container};

  transition: all 500ms ease;

  & > svg {
    opacity: ${({ completed }) => (completed ? 1 : 0)};
    transition: opacity 500ms ease;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2rem;
`;
