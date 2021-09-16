import React,  { useState }  from 'react';
import { Button } from 'react-bootstrap';
import Card from './Card.js';
import Data from '../data.js'

function Home() {
    let [shoes, shoesEdit] = useState(Data)
    console.log(shoesEdit);

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
                shoes.map((shoe, i) => {
                  return <Card shoe={shoes[i]} id={i} key={i}/>
                })
              }
            </div>
        </div>
        </>
    )
}

export default Home;