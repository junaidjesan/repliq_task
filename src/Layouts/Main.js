import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Sheared/Header/Header';

const Main = () => {
    return (
        <div className='text-white'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;