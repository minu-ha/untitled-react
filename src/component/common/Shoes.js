import React from 'react';
import { Col } from 'react-bootstrap';

function Shoes(props) {
  return (
    <div>
      <Col xs={6} md={4}>
        <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} width={'30%'} alt={''} />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
      </Col>
    </div>
  );
}

export default Shoes;
