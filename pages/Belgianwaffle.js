import React from 'react'
import Navbar from '../components/Navbar'

import belgianw1 from '../assets/belgianw1.jpeg';
import belgianw2 from '../assets/belgianw2.jpeg';
import belgianw3 from '../assets/belgianw3.jpeg';
import belgianw4 from '../assets/belgianw4.jpeg';
import belgianw5 from '../assets/belgianw5.jpeg';

import '../styles/FoodStyle.css';

function Belgianwaffle() {
  return (
    <div>
      <Navbar />
      <div className="content-item border">
        <img src={belgianw1} alt="Belgian Waffle" className="content-image" />
        <p className="content-paragraph">
          <h1>Almond Brownie Waffle</h1>
          The Best Of Two Worlds In A Single Bite - A Waffle And A Brownie. With Deliciously Rich Melted Chocolate and Almonds. Your Doorway To Heaven!
          
          <h4>Rs.182.38</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={belgianw2} alt="Belgian Waffle" className="content-image" />
        <p className="content-paragraph">
          <h1>Kiki & Oreo Cream Waffle</h1>
          Signature Black Velvet Waffle + Our Special Blue Filling with Cookie Crunchy Oreo Bits Filling. Kiki Do You Love Me?
          
          <h4>Rs.155.71</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={belgianw3} alt=" Belgian Waffle" className="content-image" />
        <p className="content-paragraph">
          <h1>Triple Chocolate Waffle</h1>
          Signature Dark Chocolate Waffle + 3 Layers Of Melted White Chocolate, Belgian Milk Chocolate And Belgian Dark Chocolate. The Most Indulgent Chocolate Waffle Ever!
          
          <h4>Rs.175</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={belgianw4} alt="Belgian Waffle" className="content-image" />
        <p className="content-paragraph">
          <h1>Red Velvet Waffle</h1>
          Original Red Velvet Waffle + Philadelphia style cream cheese and melted Belgian white chocolate. A true Original!
         
          <h4>Rs.165</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={belgianw5} alt="Belgian Waffle" className="content-image" />
        <p className="content-paragraph">
          <h1>Chocolate Overload Dark Waffle</h1>
          Signature Dark Chocolate Waffle + Melted Belgian Dark Chocolate. Double The Chocolate!
          
          <h4>Rs.165</h4>
          
        </p>
      </div>
    </div>
  )
}

export default Belgianwaffle;
