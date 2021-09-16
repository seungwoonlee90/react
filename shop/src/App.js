import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js'
import Card from './components/Card.js';
import Detail from './components/Detail.js'
import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoesEdit] = useState(Data)
  console.log(shoesEdit);
  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/">ShoeShop</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
