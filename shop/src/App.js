import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js'

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

    </div>
  );
}

function Card(props) {
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.id + 1)+ ".jpg"} alt="img_1" width="100%"/>
      <h4> { props.shoe.title } </h4>
      <p> { props.shoe.content } </p>
      <p> { props.shoe.price } </p>
    </div>
  )
}


export default App;
