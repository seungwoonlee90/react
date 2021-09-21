import React, { useState }  from 'react';
import './App.css';
import Data from './data.js'
import Detail from './components/Detail.js';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js'
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Cart from './components/Cart.js'

function App() {  
  let [shoes, shoesEdit] = useState(Data)
  let [last, lastEdit] = useState([10, 11, 12])
  console.log(lastEdit)

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home shoes={shoes}/>
          <button className="btn btn-primary" onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              shoesEdit([...shoes, ...result.data])
            })
            .catch(()=>{
              console.log('실패!')
            })
          }}>더보기</button>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} last={last}/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
