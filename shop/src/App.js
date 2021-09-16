import React, { useState }  from 'react';
import './App.css';
import Data from './data.js'
import Detail from './components/Detail.js';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js'
import { Route, Switch } from 'react-router-dom';

function App() {  
  let [shoes, shoesEdit] = useState(Data)
  console.log(shoesEdit);

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home shoes={shoes}/>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
        <Route path="/:id">
          <div>아무거나 적었을때</div>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
