import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import SearchPlayers from './components/searchPlayers';

function players(){
    return (
        <div>
            <Navbar/>
            <SearchPlayers/>
            <Footer/>
        </div>
    );
}

export default players;