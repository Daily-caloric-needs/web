import { ThemeProvider } from '@mui/material';
import './App.scss';
import { theme } from './themes';
import { Routers } from './components/Routes';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Routers />
      </div>
    </ThemeProvider>
  );
}

export default App;
