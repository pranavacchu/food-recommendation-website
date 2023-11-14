import React from 'react';
import Navbar from '../components/Navbar';

import CornerhImage from '../assets/cornerh.jpeg'; 
import MilanoImage from '../assets/milano.jpeg'; 
import BelgianwaffleImage from '../assets/belgianw.jpeg'; 
import PolarbearImage from '../assets/polarb.jpeg'; 
import BaskinRobbinsImage from '../assets/baskinr.jpeg'; 

import '../styles/Template.css'
import { Link } from 'react-router-dom';

const Desserts = () => {
  return (
    <div>
      <Navbar />
      
      <p className="heading"> What are you craving for? </p>

      <Link to="/Cornerhouse">
        <div className="food-item border">
          <img src={CornerhImage} alt="Burger" className="food-image" />
          <p className="food-name">Corner House</p>
        </div>
      </Link>

      <Link to="/Milano">
        <div className="food-item border">
          <img src={MilanoImage} alt="Burger" className="food-image" />
          <p className="food-name">Milano</p>
        </div>
      </Link>

      <Link to="/Belgianwaffle">
        <div className="food-item border">
          <img src={BelgianwaffleImage} alt="Burger" className="food-image" />
          <p className="food-name">Belgian Waffle</p>
        </div>
      </Link>

      <Link to="/Polarbear">
        <div className="food-item border">
          <img src={PolarbearImage} alt="Burger" className="food-image" />
          <p className="food-name">Polar Bear</p>
        </div>
      </Link>

      <Link to="/Baskinrobbins">
        <div className="food-item border">
          <img src={BaskinRobbinsImage} alt="Burger" className="food-image" />
          <p className="food-name">Baskin Robbins</p>
        </div>
      </Link>
    </div>
  );
};

export default Desserts;
