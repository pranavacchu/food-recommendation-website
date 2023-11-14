import React from 'react';
import logo from '../assets/logoWhite.png';
import '../styles/NavbarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

   <div className='navbar'>

      <div className='navlogo'>
      <img src={logo} className="navlog"/>
      </div>

      <div className='navlocation border'>
      <FontAwesomeIcon icon={faLocationDot} className='location'/>
      <p className="india">India</p>
      </div>
      
      <div className='navhouse border'>
      <Link to="/Menu">
      <FontAwesomeIcon icon={faHouse} className='house'/>
      </Link>
      </div>

      <div className='navmessage border'>
      <Link to="/contactus"> 
      <FontAwesomeIcon icon={faMessage} className='message'/>
      </Link>
      </div>  
    </div>
  );
};

export default Navbar;
