import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js'
import Card from './components/Card.js';
import Detail from './components/Detail.js';
import Navigation from './components/Navigation.js';
import { Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoesEdit] = useState(Data)
  console.log(shoesEdit);
  
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <div className="background">
            <h3>20% Season Off</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="primary">Learn more</Button>
          </div>

          <div className="container">
            <div className="row">
              {
                shoes.map((shoe, i) => {
                  return <Card shoe={shoes[i]} id={i} key={i}/>
                })
              }
            </div>
          </div>
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
