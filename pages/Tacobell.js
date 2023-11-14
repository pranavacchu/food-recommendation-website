import React from 'react';
import Navbar from '../components/Navbar';
import BigBellBox from '../assets/bigBellBox.jpg'; 
import VeggieTaco from '../assets/veggieTaco.jpg'; 
import ChickenTaco from '../assets/chickenTaco.jpg'; 
import ChickenWrap from '../assets/chickenWrap.jpg'; 
import Quesadilla from '../assets/quesadilla.jpg'; 
import '../styles/FoodStyle.css';

function Tacobell() {
  return (
    <div>
      <Navbar />

      <div className="content-item border">
        <img src={BigBellBox} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Big Bell Box</h1>     
          Meal for 1 (save up to Rs. 143) this real blockbuster meal comes with 1 veg sriracha burrito, 1 crunchy pinto bean taco topped with zesty ranch sauce, 1 Seasoned Fries, 1 cinnamon twist and 1 beverage of choice.
          <h3 className='veg'>VEG</h3>
          <h4>Rs.299</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={VeggieTaco} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Naked Veggie Taco</h1>
          A crusted & spice coated plant-based protein patty Taco, layered with warm nacho cheese, lettuce, our signature Mexican Pico De Gallo - a tangy tomato & onion mix along with the goodness of mozzarella and cheddar cheese blend. KCAL 208.02
          <h3 className='veg'>VEG</h3>
          <h4>Rs.249</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={ChickenTaco} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Naked Chicken Taco</h1>
          A taco made entirely out of chicken! It is a juicy and crispy chicken taco filled with zesty ranch sauce, crisp shredded lettuce, tangy salsa and topped with two-blend cheese & nacho cheese sauce.
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.249</h4>       
          </p>
      </div>

      <div className="content-item border">
        <img src={ChickenWrap} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Hot and crispy crunch wrap</h1>
          A unique star shaped warm wrap. It has chicken chips marinated in bold mexican spices, lettuce, fiesta salsa and two sauces - spicy lava sauce and creamy nacho cheese
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.235</h4>   
        </p>
      </div>

      <div className="content-item border">
        <img src={Quesadilla} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Melted Cheese Quesadilla</h1>
          Quesadilla is a soft grilled tortilla folded with loads of cheese, fajita veggies & creamy jalapeno sauce.
          <h3 className='veg'>VEG</h3>
          <h4>Rs.205</h4>
        </p>
      </div>
    </div>
  );
}

export default Tacobell;
