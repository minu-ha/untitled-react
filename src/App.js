import './asset/css/App.css';
import Navi from './component/common/Navi';
import Item from './component/common/Item';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail';
import { useState } from 'react';
import data from './component/data/Data';
import Todo from './routes/Todo';
import Cart from './routes/Cart';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Routes>
        <Route
          path={'/'}
          element={
            <>
              <Navi />
              <Item shoes={shoes} />
            </>
          }
        />
        <Route
          path={'/detail/:id'}
          element={
            <>
              <Detail shoes={shoes} />
            </>
          }
        />
        <Route
          path={'/todo'}
          element={
            <>
              <Todo />
            </>
          }
        />
        <Route path={'/cart'} element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
