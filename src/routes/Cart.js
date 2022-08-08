import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increaseAge } from '../store/userSlice';
import { addCount } from '../store/store';

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {state.user.name}
      {state.user.age}
      <button
        onClick={() => {
          dispatch(increaseAge(10));
        }}
      >
        +
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((value, index) => {
            return (
              <tr key={index}>
                <td>{state.cart[index].id}</td>
                <td>{state.cart[index].name}</td>
                <td>{state.cart[index].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(state.cart[index].id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
