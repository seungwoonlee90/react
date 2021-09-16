import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js'
import Card from './components/Card.js';

import { Route } from 'react-router-dom';

function App() {

  let [shoes, shoesEdit] = useState(Data)
  console.log(shoesEdit);
  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="detail_shoe_1" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
      </Route>
    </div>
  );
}


export default App;
