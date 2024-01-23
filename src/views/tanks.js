import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import TankCards from './components/tankCards';
function tanks() {
    
    return (
        <div>
            <Navbar/>
            <TankCards/>
            <Footer/>
        </div>
    );
}

export default tanks