import React from 'react'
import Navbar from '../components/Navbar'
import Cornerh1 from '../assets/cornerh1.jpeg';
import Cornerh2 from '../assets/cornerh2.jpeg';
import Cornerh3 from '../assets/cornerh3.jpeg';
import Cornerh4 from '../assets/cornerh4.jpeg';
import Cornerh5 from '../assets/cornerh5.jpeg';
import '../styles/FoodStyle.css';

function Cornerhouse() {
  return (
    <div>
      <Navbar />
      <div className="content-item border">
        <img src={Cornerh1} alt="Corner House" className="content-image" />
        <p className="content-paragraph">
          <h1>Death By Chocolate</h1>
          Combination of vanilla ice cream and chocolate cake topped with cream, chocolate sauce, peanuts and cherries.
          <h4>Rs.230</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Cornerh2} alt="Corner House" className="content-image" />
        <p className="content-paragraph">
          <h1>Cake Fudge</h1>
          Combination of two scoops of vanilla ice cream and chocolate cake topped with chocolate sauce and roasted peanuts.
        
          <h4>Rs.150</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Cornerh3} alt="Corner House" className="content-image" />
        <p className="content-paragraph">
          <h1>Hot chocolate Fudge</h1>
          Three scoops of vanilla ice cream topped with chocolate sauce and roasted peanuts.
          
          <h4>Rs.150</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Cornerh4} alt="Corner House" className="content-image" />
        <p className="content-paragraph">
          <h1>Chocolate Nut sundae</h1>
          Three scoops of chocolate ice cream topped with chocolate sauce and roasted peanuts.
         
          <h4>Rs.160</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Cornerh5} alt="Corner House" className="content-image" />
        <p className="content-paragraph">
          <h1>Super Scooper</h1>
          Combination of vanilla, strawberry, mango, and Pista ice cream with fruit salad, topped with cream, jelly, hot chocolate sauce, and roasted peanuts.
          
          <h4>Rs.230</h4>
          
        </p>
      </div>
    </div>
  )
}

export default Cornerhouse
