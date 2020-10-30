import React from "react";
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import SignUp from './SignUp';
import Home from './home';
import About from './About';
import Contact from './Contact  US';
import Services from './Services';
import { BrowserRouter as Router ,Route } from 'react-router-dom';


 
function App() {
  return (
    <Router>
    <div className='App'>
    

    < Navbar/>
   <Route path="/Home"component={Home}/>
   <Route path="/about"component={About}/>
   <Route path="/contact"component={Contact}/>
   <Route path="/Services"component={Services}/>
   <Route path="/Login"component={Login}/>
   <Route path="/SignUp"component={SignUp}/>
   
  

   
   
    
    </div></Router>
   
  );
}

export default App;
