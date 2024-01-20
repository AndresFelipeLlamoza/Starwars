import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

function players(){
    return (
        <div>
            <Navbar/>
            <h1>Esta es la vista de jugadores</h1>
            <Footer/>
        </div>
    );
}

export default players;