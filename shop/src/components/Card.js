import React from 'react';


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

  export default Card;