import React,{ useState }from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';




function Navbar() {
    const [open, setOpen] = useState(false);
    const navStyle = {
        color: 'white'
    };


    return (
        <div>
    <nav>

        <div className="logo">Blood bank</div>
        <ul className="nav-links" 
        style={{transform: open ?
        "translateX(0px)" :  ""}}>
            
    
    <Link style={navStyle}to='/Home'>  
    <li>
    <a>Home</a>    
                </li></Link>
                <Link style={navStyle}to='/About'>
            <li>
              <a>About</a>
                </li></Link>

                <Link style={navStyle}to='/Contact'><li>
             <a>Contact</a>
                </li> </Link>
                
                <Link style={navStyle}to='/Services'><li>
                <a>Services</a>
                </li></Link>

                <Link style={navStyle}to='/Login'><li>
                <a>Login</a>
                </li></Link>

                <Link style={navStyle}to='/SignUp'><li>
                <a>SignUp</a>
                </li></Link>

                
                
                
            </ul>   

            <i onClick={()  => setOpen(!open)}  
             class="fas fa-align-justify bloody"></i>
             </nav>
             
        </div>
    )
}


export default Navbar;