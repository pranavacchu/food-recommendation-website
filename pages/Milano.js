import React from 'react'
import Navbar from '../components/Navbar'

import milano1 from '../assets/milano1.jpeg'; 
import milano2 from '../assets/milano2.jpeg'; 
import milano3 from '../assets/milano3.jpeg'; 
import milano4 from '../assets/milano4.jpeg'; 
import milano5 from '../assets/milano5.jpeg'; 

import '../styles/FoodStyle.css';

function Milano() {
  return (
    <div>
      <Navbar/>
      <div className="content-item border">
        <img src={milano1} alt="Milano" className="content-image" />
        <p className="content-paragraph">
          <h1>Chocolate Sundae</h1>     
          Scoops of assorted chocolate gelato, finished with homemade chocolate sauce and whipped cream.
          
          <h4>Rs.260</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={milano2} alt="Milano" className="content-image" />
        <p className="content-paragraph">
          <h1>Fresh Fruit Salad Sundae</h1>
          Made with assorted fresh fruits, smooth vanilla gelato, homemade strawberry/blueberry sauce and whipped cream.
         
          <h4>Rs.260</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={milano3} alt="Milano" className="content-image" />
        <p className="content-paragraph">
          <h1>Strawberry Sundae</h1>
          A seasonal item on our menu, made with vanilla and strawberry gelato, fresh strawberries and whipped cream.

          <h4>Rs.260</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={milano4} alt="Milano" className="content-image" />
        <p className="content-paragraph">
          <h1>Truffle Gelato</h1>
          A truffle ball half made with ferrero and other half with vanilla gelato. dusted with cocoa powder and served with a cherry on top.
      
          <h4>Rs.250</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={milano5} alt="Milano" className="content-image" />
        <p className="content-paragraph">
          <h1>Gelato Cake Slice</h1>
          A slice of our ice cream cake that's made with our creamy gelato.
          
          <h4>Rs.150</h4>
        </p>
      </div>
    </div>
  )
}

export default Milano;
