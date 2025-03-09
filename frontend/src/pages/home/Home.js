import React from 'react';
import Menu from '../../components/Menu';
import Slider from '../../components/Banner';
import TopBar from '../../components/TopBar';
import Services from '../../components/Services';
import Stat from '../../components/Stat';

const Home = () => {
    return (
        <div>
        
         
            <Slider/>
            <Services/>
            <Stat/>
        </div>
    );
};

export default Home;