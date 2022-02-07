import styled from 'styled-components';

export const InputContainer = styled.section`
  width: 100%;
  margin-top: 1.5rem;
  overflow: hidden;
  position: relative;
  border-radius: 0.25rem;

  &::before {
    content: '';
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    position: absolute;
    border: 1px solid ${({ theme }) => theme.conditional.color.muted};
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    padding-bottom: 0.125rem;
    transition: border 500ms ease;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 1.125rem;
  padding-left: 4.5rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.conditional.color.container};
  caret-color: ${({ theme }) => theme.conditional.color.muted};
  color: ${({ theme }) => theme.conditional.color.text};
  transition: background 500ms ease;

  &::placeholder {
    line-height: normal;
    vertical-align: baseline;
  }
`;
