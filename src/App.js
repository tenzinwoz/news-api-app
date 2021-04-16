import './App.css';
import Routes from './routes/Routes';
import { ThemeProvider } from '@material-ui/core';
import { customTheme } from './muiTheme/Theme';
import { Provider } from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
