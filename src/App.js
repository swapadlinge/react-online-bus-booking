
import './App.css';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from './router/Routes';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
