import React from 'react'
import Navbar from '../components/Navbar'
import Mcd1 from '../assets/mcd1.jpeg'; 
import Mcd2 from '../assets/mcd2.jpeg'; 
import Mcd3 from '../assets/mcd3.jpeg'; 
import Mcd4 from '../assets/mcd4.jpeg'; 
import Mcd5 from '../assets/mcd5.jpeg'; 
import '../styles/FoodStyle.css';

function McDonalds() {
  return (
    <div>
      <Navbar/>
      <div className="content-item border">
        <img src={Mcd1} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>McChicken Burge</h1>     
          Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite.
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.140.95</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Mcd2} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Veg Maharaja Mac</h1>
          Enjoy the tallest burgers innovated by us. Created with perfectly fried corn and cheese patty paired along with fresh ingredients like jalapeno??onion, slice of cheese & crunchy lettuce dressed with cocktail sauce.
          <h3 className='veg'>VEG</h3>
          <h4>Rs.231.43</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Mcd3} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Veg Pizza McPuff</h1>
          Crispy brown crust with a generous filling of rich tomato sauce, mixed with carrots, bell peppers, beans, onions and mozzarella. Served HOT.
          <h3 className='veg'>VEG</h3>
          <h4>Rs.59.05</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Mcd4} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Chicken McNuggets(6pcs)</h1>
          6 pieces of our iconic crispy, golden fried Chicken McNuggets!
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.176.00</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Mcd5} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Fries(M)</h1>
          World Famous Fries, crispy golden, fried to perfection and lightly salted. Also known as happiness.
          <h3 className='veg'>VEG</h3>
          <h4>Rs.119.00</h4>
        </p>
      </div>
    </div>
  )
}

export default McDonalds
