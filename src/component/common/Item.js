import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Shoes from './Shoes';

function Item(props) {
  return (
    <div>
      <Row>
        {props.shoes.map((v, i) => {
          return (
            <>
              <Shoes shoes={props.shoes[i]} />
            </>
          );
        })}
      </Row>
    </div>
  );
}

export default Item;
