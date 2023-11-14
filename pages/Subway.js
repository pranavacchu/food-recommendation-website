import React from 'react'
import Navbar from '../components/Navbar'
import Sub1 from '../assets/sub1.jpeg';
import Sub2 from '../assets/sub2.jpeg';
import Sub3 from '../assets/sub3.jpeg';
import Sub4 from '../assets/sub4.jpeg';
import Sub5 from '../assets/sub5.jpeg';
import '../styles/FoodStyle.css';
function Subway() {
  return (
    <div>
      <Navbar />
      <div className="content-item border">
        <img src={Sub1} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Corn & Peas Salad</h1>
          Serves 1 | A delicious assortment of green peas, golden corn and diced carrots, dressed with a creamy mixture of eggless mayo sauce, and served on your favourite bread. Allergens - Contains wheat, rye, barley, oats, milk. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.
          <h3 className='veg'>VEG</h3>
          <h4>Rs.279</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Sub2} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Paneer Achari</h1>
          Multigrain toasted Sub with chunks of paneer, achari mayo, pickled onion, capsicum, tomato and chilli mayo. Serving size - 240 g/ 589 kcal. Allergens - Contains wheat, rye, barley, oats, milk & soy.          <h3 className='veg'>VEG</h3>
          <h4>Rs.269</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Sub3} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Veggie delite Sandwich</h1>
          Serves 1 | Delicious combination of fresh lettuce, tomatoes, green peppers, cucumbers, onions, olives and pickles served on a freshly baked bread. Serving size : 15 cm - 164 g / 242 kcal , 30 cm - 328 g / 484 kcal. Allergens - Contains wheat, rye, barley, oats. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.
          <h3 className='veg'>VEG</h3>
          <h4>Rs.199</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Sub4} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Pepper chicken</h1>
          A flavourful toasted sub loaded with capsicum, olives & jalapeños. This warm sandwich has juicy black pepper chicken paired with creamy Italian sauce and white Italian bread as the base. Requires no customization. Serving size - 189 g/359 kcal. Allergens - Contains wheat, rye, barley, oats, milk, nuts & soy.
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.299</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Sub5} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Chicken Teriyaki Sandwich</h1>
          Serves 1 | Chicken strips glazed with teriyaki sauce, combined with your favourite veggies and topped with our signature sweet onion sauce served hot in a freshly baked bread of your choice. Serving size : 15 cm - 224 g / 311 kcal , 30 cm - 448 g / 622 kcal. Allergens - Contains wheat, rye, barley, oats, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.279</h4>
          
        </p>
      </div>
    </div>
  )
}

export default Subway
