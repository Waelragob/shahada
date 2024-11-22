import './App.css';
import App_Home from './app/app';
import { ThemeProvider } from './Conteex/ThemeContext';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <App_Home />
      </ThemeProvider>
    </Router>
  );
}

export default App;
