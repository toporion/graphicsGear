import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import TopBar from '../components/TopBar';

const Main = () => {
    return (
        <div>
                <TopBar/>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default Main;