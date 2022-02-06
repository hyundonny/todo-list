import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import GlobalStyles from 'styles/globalStyles';
import { commonTheme, lightTheme, darkTheme } from 'styles/themes';

import Container from 'components/container';
import Header from 'features/themes/header';
import TodoInput from 'features/todos/input';
import TodoList from 'features/todos/list';

function App() {
  const currentTheme = useSelector(state => state.theme);
  const conditionalTheme = currentTheme === 'light' ? lightTheme : darkTheme;

  const theme = {
    ...commonTheme,
    ...conditionalTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <TodoInput />
        <TodoList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
