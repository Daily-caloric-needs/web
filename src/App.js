import './App.scss';
import { Content } from './components/Content/Content';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
