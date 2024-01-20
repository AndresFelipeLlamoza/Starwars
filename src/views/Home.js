import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
function Home() {
    return (
        <div>
            <Navbar/>
            <h1>Esta es la pagina de inicio</h1>
            <Footer/>
        </div>
    );
}

export default Home;