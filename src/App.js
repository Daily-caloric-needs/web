import { ThemeProvider } from '@mui/material';
import './App.scss';
import { Content } from './components/Content/Content';
import { Sidebar } from './components/Sidebar/Sidebar';
import { theme } from './themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
