import React from 'react';
import { Link } from 'react-router-dom';
import burger from '../assets/burger.jpeg';
import desserts from '../assets/icecream.jpg'
import logoimage from '../assets/logoBlack.png'
import '../styles/Menu.css'


function Menu() {

    return (

        <div className="parent" >

            <h2 className="text"> What's on your mind? </h2>
            <img className="logo2" src={logoimage}/> 

            <div className="img">

                <Link to="/Fastfood">
                    <img className="img1" src={burger} />
                </Link>
            </div>

            <div className="img">
                <Link to="/Desserts">
                    <img className="img2" src={desserts} />

                </Link>
            </div>
        </div>
           
          
    );
};


export default Menu;


