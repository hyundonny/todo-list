import { useSelector, useDispatch } from 'react-redux';
import {
  getActiveTodoIds,
  completedTodosCleared,
} from 'features/todos/todosSlice';

import { FILTERS, filterChanged } from 'features/filters/filtersSlice';

import * as S from 'features/filters/footer/styles';

function Footer() {
  const dispatch = useDispatch();
  const activeTodoIds = useSelector(getActiveTodoIds);
  const selectedFilter = useSelector(state => state.filters);

  const handleClearCompleted = () => {
    dispatch(completedTodosCleared());
  };

  const handleFilterChanged = filter => () => dispatch(filterChanged(filter));

  const renderedFilters = Object.values(FILTERS).map(f => (
    <S.FilterItem
      key={f}
      selected={selectedFilter === f}
      onClick={handleFilterChanged(f)}>
      {f}
    </S.FilterItem>
  ));

  return (
    <S.Footer>
      <S.ItemsLeft>{activeTodoIds.length} active todos left</S.ItemsLeft>
      <S.FilterList>{renderedFilters}</S.FilterList>
      <S.ClearCompleted type="button" onClick={handleClearCompleted}>
        Clear Completed
      </S.ClearCompleted>
    </S.Footer>
  );
}

export default Footer;
