import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Home.css'
import BannerImage from '../assets/background1.jpg'
import logoimage from '../assets/logoWhite.png'

function Home() {
  return (
    <div className="home" 
    style={{backgroundImage:`url(${BannerImage})`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url("${BannerImage}")`}}>
       
       <div className="headerContainer" >
       <p> Find the best restaurants near you.</p>
       <img src={logoimage} className="logo"/> 

       <Link to="/menu">
            <button className="bttn"> Let's get started!</button>
       </Link>
       
       </div>
    </div>
  );
}

export default Home;
