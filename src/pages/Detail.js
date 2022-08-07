import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { cleanup } from '@testing-library/react';

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === 'blue' ? 'white' : 'black')};
  padding: 10px;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  let find = props.shoes.find((x) => x.id == id);
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <Box>
        <YellowBtn bg={'blue'}>btn</YellowBtn>
      </Box>
      <div className="container">
        {alert == true ? <div className={'alert alert-danger'}>2초이내구매시할인</div> : null}
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt={''} />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{find.title}</h4>
            <p>{find.content}</p>
            <p>{find.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
