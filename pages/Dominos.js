import React from 'react'
import Navbar from '../components/Navbar'
import Dominos1 from '../assets/dominos1.jpeg';
import Dominos2 from '../assets/dominos2.jpeg';
import Dominos3 from '../assets/dominos3.jpeg';
import Dominos4 from '../assets/dominos4.jpeg';
import Dominos5 from '../assets/dominos5.jpeg';
import '../styles/FoodStyle.css';

function Dominos() {
  return (
    <div>
      <Navbar />
      <div className="content-item border">
        <img src={Dominos1} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Farmhouse Pizza</h1>
          Delightful combination of onion, capsicum, tomato & grilled mushroom. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.
          <h3 className='veg'>VEG</h3>
          <h4>Rs.479</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Dominos2} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Margherita Pizza</h1>
          Classic delight with 100% real mozzarella cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.
          <h3 className='veg'>VEG</h3>
          <h4>Rs.259</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Dominos3} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Pepper barbeque Chicken Pizza</h1>
          Pepper barbecue chicken for that extra zing.
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.119</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Dominos4} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Garlic Breadsticks</h1>
          Baked to perfection. Your perfect pizza partner! Tastes best with dip
          <h3 className='veg'>VEG</h3>
          <h4>Rs.109</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Dominos5} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Indi Tandoori Paneer Pizza</h1>
          It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.
          <h3 className='veg'>VEG</h3>
          <h4>Rs.579</h4>
          
        </p>
      </div>
    </div>
  )
}

export default Dominos
