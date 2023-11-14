import './App.css';
import Desserts from './pages/Desserts';
import Fastfood from './pages/Fastfood';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contactus from './pages/Contactus';

import Tacobell from './pages/Tacobell';
import McDonalds from './pages/McDonalds';
import Dominos from './pages/Dominos';
import Subway from './pages/Subway';
import KFC from './pages/KFC';

import Cornerhouse from './pages/Cornerhouse';
import Milano from './pages/Milano';
import Polarbear from './pages/Polarbear';
import Belgianwaffle from './pages/Belgianwaffle';
import Baskinrobbins from './pages/Baskinrobbins';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Routes> 
          <Route exact  path="/" element={<Home/>}/>
          <Route path="/Menu" element= {<Menu/>} /> 

          <Route path="/Fastfood" element= {<Fastfood/>} /> 
          <Route path="/Tacobell" element= {<Tacobell/>} /> 
          <Route path="/McDonalds" element= {<McDonalds/>} /> 
          <Route path="/Dominos" element= {<Dominos/>} /> 
          <Route path="/Subway" element= {<Subway/>} /> 
          <Route path="/KFC" element= {<KFC/>} />  

          <Route path="/Desserts" element= {<Desserts/>} />
          <Route path="/Cornerhouse" element= {<Cornerhouse/>} /> 
          <Route path="/Milano" element= {<Milano/>} />
          <Route path="/Belgianwaffle" element= {<Belgianwaffle/>} /> 
          <Route path="/Polarbear" element= {<Polarbear/>} /> 
          <Route path="/Baskinrobbins" element= {<Baskinrobbins/>} />  

          <Route path="/Contactus" element= {<Contactus/>} />
          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
