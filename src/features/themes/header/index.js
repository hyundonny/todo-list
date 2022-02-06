import { themes, changeTheme } from 'features/themes/themesSlice';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Sun } from 'assets/images/icon-sun.svg';
import { ReactComponent as Moon } from 'assets/images/icon-moon.svg';

import * as S from 'features/themes/header/styles';

function Header() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.theme);
  const nextTheme = currentTheme === themes.LIGHT ? themes.DARK : themes.LIGHT;

  return (
    <S.Header>
      <S.Logo>TODO</S.Logo>
      <button type="button" onClick={() => dispatch(changeTheme(nextTheme))}>
        {currentTheme === 'light' ? <Moon /> : <Sun />}
      </button>
    </S.Header>
  );
}

export default Header;
