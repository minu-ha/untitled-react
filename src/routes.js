import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Todo from './pages/Todo';
import data from './component/data/Data';
import { useState } from 'react';

const Router = () => {
    let [shoes] = useState(data);
    return (
        <Routes>
            {/* <Route
                path={'/'}
                element={
                    <>
                        <Navi />
                        <Item shoes={shoes} />
                    </>
                }
            /> */}
            <Route
                path={'/detail/:id'}
                element={
                    <Detail shoes={shoes} />
                }
            />
            <Route
                path={'/todo'}
                element={
                    <Todo />
                }
            />
        </Routes>
    )
}
export default Router;