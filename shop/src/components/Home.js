import React from 'react';
import { Button } from 'react-bootstrap';
import Card from './Card.js';

function Home(props) {
    return(
        <>
        <div className="background">
            <h3>20% Season Off</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="primary">Learn more</Button>
          </div>

          <div className="container">
            <div className="row">
              {
                props.shoes.map((shoe, i) => {
                  return <Card shoe={props.shoes[i]} id={i} key={i}/>
                })
              }

            </div>
        </div>
        </>
    )
}

export default Home;