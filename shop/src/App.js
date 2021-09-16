import React from 'react';
import './App.css';
import Detail from './components/Detail.js';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js'
import { Route, Switch } from 'react-router-dom';

function App() {  
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/:id">
          <div>아무거나 적었을때</div>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
