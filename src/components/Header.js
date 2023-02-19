import "../styles/Header.css";
import FoodLogo from "../assets/Food_Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnline from "../utlis/useOnline";
import Hamberg from "./Hamberg";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const [click, setClick] = useState(false);
  console.log(click)
  return (
    <nav className='header'>
      <a href='/'>
        <img
          className='logo'
          src={FoodLogo}
          alt='logo'
        />
      </a>
      <div className='nav-items'>
        <ul>
          <Link to='/'>
            <li className='nav-lists'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='nav-lists'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='nav-lists'>Contact</li>
          </Link>
          <Link to='/Instamart'>
            <li className='nav-lists'>Instamart</li>
          </Link>
          <li className='nav-lists'>Cart</li>
        </ul>
      </div>
      <h4>{isOnline ? "🟢"+ "Online" : "🛑" + " Disconnected"}</h4>
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
        )}
      </div>
      <Hamberg onClick={()=> setClick(!click)}/>
      {
        click ? (
          <div className='nav-mobile-items'>
        <ul>
          <Link to='/'>
            <li className='nav-mobile-lists'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='nav-mobile-lists'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='nav-mobile-lists'>Contact</li>
          </Link>
          <Link to='/Instamart'>
            <li className='nav-mobile-lists'>Instamart</li>
          </Link>
          <li className='nav-mobile-lists'>Cart</li>
        </ul>
      </div>
        ): null
      }
    </nav>
  );
};
export default Header;
