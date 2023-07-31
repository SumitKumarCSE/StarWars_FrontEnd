import React from 'react';
import { useLocation } from 'react-router-dom';       // Use for search box
import './NavBar.css';
import logo from "../../img/logo.png";                // Logo of star wars
import SearchSvg from '../Svg/SearchSvg';


function NavBar() {
    const location = useLocation();
    const isHome = location.pathname !== '/';          // Apply condition on search box to make it visible for every web page except home page
    return(
        <div className='NavBar'>
            <img src={logo} alt="logo"/>
            {isHome && (
                <div className='Search'>
                    <SearchSvg classN='ssvg' />
                    <input type="text" placeholder='Search'/>
                </div>
            )}
        </div>
    );
}

export default NavBar;
