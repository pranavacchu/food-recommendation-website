import React from 'react'
import Navbar from '../components/Navbar'

import polarb1 from '../assets/polarb1.jpeg'; 
import polarb2 from '../assets/polarb2.jpeg'; 
import polarb3 from '../assets/polarb3.jpeg'; 
import polarb4 from '../assets/polarb4.jpeg'; 
import polarb5 from '../assets/polarb5.jpeg'; 

import '../styles/FoodStyle.css';

function Polarbear() {
  return (
    <div>
      <Navbar/>
      <div className="content-item border">
        <img src={polarb1} alt="Polar Bear" className="content-image" />
        <p className="content-paragraph">
          <h1>Chocolate Sundae</h1>     
          Scoops of assorted chocolate gelato, finished with homemade chocolate sauce and whipped cream.
          
          <h4>Rs.188</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={polarb2} alt="Polar Bear" className="content-image" />
        <p className="content-paragraph">
          <h1>Classic Death By Chocolate</h1>
          The Classic - a dangerous combination of Vanilla Ice Cream, Rich Chocolate Cake, Hot Chocolate Fudge & Roasted Cashewnuts. 
         
          <h4>Rs.231</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={polarb3} alt="Polar Bear" className="content-image" />
        <p className="content-paragraph">
          <h1>Dry Fruit Special Sundae</h1>
          Creamy vanilla ice cream loaded with dry fruits like figs, raisins, almonds, dates, and cashew, topped with honey syrup.

          <h4>Rs.194</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={polarb4} alt="Polar Bear" className="content-image" />
        <p className="content-paragraph">
          <h1>Red N White Crust Ice Cream Cake</h1>
          Delectable layers of red velvet ice cream, red velvet cake, blueberries & white chocolate shavings.
      
          <h4>Rs.250</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={polarb5} alt="Polar Bear" className="content-image" />
        <p className="content-paragraph">
          <h1>Alphonso Mango Sorbet</h1>
          Melt-in-the-mouth alphonso mango sorbet cubes.
          
          <h4>Rs.83</h4>
        </p>
      </div>
    </div>
  )
}

export default Polarbear;
