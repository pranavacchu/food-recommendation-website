import React from 'react';
import Navbar from '../components/Navbar';
import BurgerImage from '../assets/burger.jpeg'; 
import TacoImage from '../assets/taco.jpg'; 
import McDImage from '../assets/mcDonalds.jpg'; 
import DominosImage from '../assets/dominos.jpg'; 
import SubwayImage from '../assets/subway.jpg'; 
import KFCImage from '../assets/kfc.jpg'; 
import '../styles/Template.css'
import { Link } from 'react-router-dom';

const Fastfood = () => {
  return (
    <div>
      <Navbar />
      <p className="heading"> What are you craving for? </p>
      <Link to="/Tacobell">
        <div className="food-item border">
          <img src={TacoImage} alt="Burger" className="food-image" />
          <p className="food-name">Taco Bell</p>
        </div>
      </Link>

      <Link to="/McDonalds">
        <div className="food-item border">
          <img src={McDImage  } alt="Burger" className="food-image" />
          <p className="food-name">McDonald's</p>
        </div>
      </Link>

      <Link to="/Dominos">
        <div className="food-item border">
          <img src={DominosImage} alt="Burger" className="food-image" />
          <p className="food-name">Domino's Pizza</p>
        </div>
      </Link>

      <Link to="/Subway">
        <div className="food-item border">
          <img src={SubwayImage} alt="Burger" className="food-image" />
          <p className="food-name">Subway</p>
        </div>
      </Link>

      <Link to="/KFC">
        <div className="food-item border">
          <img src={KFCImage} alt="Burger" className="food-image" />
          <p className="food-name">KFC</p>
        </div>
      </Link>
    </div>
  );
};

export default Fastfood;
