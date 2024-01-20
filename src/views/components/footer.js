import React from 'react';
import "../components.css";
import images from "../../resources/images/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function footer() {
    return (
        <div className='footerContainer'>
            <div className='footerimg'>
                <img src={images.footerlogo} width="200"></img>
            </div>
            <div className='footerText'>
                <br></br>
                <p>Diseñado y desarrollado por: Andres Felipe Llamosa</p>
                <p>Desarrollador web fullstack</p>
            </div>
            <div className="socialNetworks">
                <center><a href="https://github.com/AndresFelipeLlamoza" target="_blank"className="socialcolumn" id="gitsocial">Github: andresfelipellamoza   <FontAwesomeIcon icon={faGithub} /></a></center>
                <center><a href="https://www.facebook.com/profile.php?id=100007588096091" target="_blank"className="socialcolumn" id="facesocial">Facebook: Felipe Llamoza   <FontAwesomeIcon icon={faFacebook} /></a></center>
            </div>
        </div>
    );
}

export default footer;