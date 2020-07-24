import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Catalog from './components/catalog/catalog';
import Adding from './components/addElement/Adding';


function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/add">
            <Adding />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
