import styled from 'styled-components';

export const Footer = styled.footer`
  display: grid;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  padding: 1.125rem 2rem;
  background-color: ${({ theme }) => theme.conditional.color.container};
  color: ${({ theme }) => theme.conditional.color.muted};
  transition: color 500ms ease, background 500ms ease;
  grid-template-areas:
    'items . clear'
    'filter filter filter';
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  gap: 1rem;
`;

export const ItemsLeft = styled.span`
  font-size: 0.8rem;
  transition: color 500ms ease;
  color: inherit;
  grid-area: items;
  height: 100%;
`;

export const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  grid-area: filter;
`;

export const FilterItem = styled.li`
  cursor: pointer;
  font-weight: 500;
  text-transform: capitalize;
  color: ${({ theme, selected }) =>
    selected ? theme.common.color.primary : theme.conditional.color.muted};
  transition: color 500ms ease;

  & + & {
    margin-left: 1rem;
  }
`;

export const ClearCompleted = styled.button`
  transition: color 500ms ease;
  font-size: 0.8rem;
  color: inherit;
  grid-area: clear;
  height: 100%;
`;
