import React from 'react'
import Navbar from '../components/Navbar'

import baskinr1 from '../assets/baskinr1.jpeg';
import baskinr2 from '../assets/baskinr2.jpeg';
import baskinr3 from '../assets/baskinr3.jpeg';
import baskinr4 from '../assets/baskinr4.jpeg';
import baskinr5 from '../assets/baskinr5.jpeg';

import '../styles/FoodStyle.css';

function Baskinrobbins() {
  return (
    <div>
      <Navbar />
      <div className="content-item border">
        <img src={baskinr1} alt="Baskin Robbins" className="content-image" />
        <p className="content-paragraph">
          <h1>Dutch Chocolate Icecream</h1>
          Tempting chocolate ice cream with a distinct hint of cocoa. The mother of every chocolate ice cream creation of ours.
          <h4>Rs.97</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={baskinr2} alt="Baskin Robbins" className="content-image" />
        <p className="content-paragraph">
          <h1>Hot scotch Butterscotch Ice cream</h1>
          With butterscotch base this ice cream has cashew crunch along with enticing butterscotch ribbon. Stop drooling, start clicking! Butterscotch ice cream calling out to you! 
        
          <h4>Rs.109</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={baskinr3} alt="Baskin Robbins" className="content-image" />
        <p className="content-paragraph">
          <h1>Belgian Bliss Ice cream</h1>
          Rich Chocolate ice cream with hidden treasures of dark chocolate cookies, hugged by a caramel ribbon. This delectable Chocolate delight is like no other! Sit back and enjoy this rich Belgian Bliss ice cream.
          <h4>Rs.109</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={baskinr4} alt="Baskin Robbins" className="content-image" />
        <p className="content-paragraph">
          <h1>Fresh fruit very Berry Strawberry Ice cream</h1>
          Sublime Strawberry ice cream with real strawberry pieces. This Strawberry ice cream is a childhood favourite. Scrap that actually, its an all time favourite!
         
          <h4>Rs.83</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={baskinr5} alt="Baskin Robbins" className="content-image" />
        <p className="content-paragraph">
          <h1>Mississippi Mud Ice cream</h1>
          Delectable chocolate fudge and ice cream, married by a fudge ribbon and sprinkled with brownie pieces. Weve tripled up on chocolate with this Mississippi Mud flavour! Chocolate overload anyone? 
          
          <h4>Rs.109</h4>
          
        </p>
      </div>
    </div>
  )
}

export default Baskinrobbins;
