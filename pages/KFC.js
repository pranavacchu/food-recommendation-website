import React from 'react'
import Navbar from '../components/Navbar'
import Kfc1 from '../assets/kfc1.jpeg';
import Kfc2 from '../assets/kfc2.jpeg';
import Kfc3 from '../assets/kfc3.jpeg';
import Kfc4 from '../assets/kfc4.jpeg';
import Kfc5 from '../assets/kfc5.jpeg';
import '../styles/FoodStyle.css';

function KFC() {
  return (
    <div>
      <Navbar />
      <div className="content-item border">
        <img src={Kfc1} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Chicken Popcorn - Medium</h1>
          Signature bite-sized boneless chicken, with special spices          
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.168.57</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Kfc2} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Chicken Zinger Burger - Classic</h1>
          Signature chicken burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce          
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.199.05</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Kfc3} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Hot Chicken Wings - 4 pcs</h1>
          Seasoned, signature KFC chicken wings          
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.179.05</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Kfc4} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>2 X Chicken Krisper Burgers</h1>
          2 delicious chicken value burgers - at a deal price          
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.248.57</h4>
        </p>
      </div>

      <div className="content-item border">
        <img src={Kfc5} alt="Taco Bell" className="content-image" />
        <p className="content-paragraph">
          <h1>Popcorn Chicken Biryani Bucket</h1>
          New Hyderabadi style Chicken Biryani rice served with signature Popcorn & a Spicy Gravy (serves 1)          
          <h3 className='nveg'>NON-VEG</h3>
          <h4>Rs.229.52</h4>
          
        </p>
      </div>
    </div>
  )
}

export default KFC
