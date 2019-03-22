import React from 'react';
import './nav.css';
import {Link , NavLink} from 'react-router-dom';

export const Nav = (props) => {
    return(
        <div className='nav'>
            <ul className='container'>
              <li><Link to='/' className='reactRouterLink'>Home</Link> </li>
              <li><Link to='/about' className='reactRouterLink' >About</Link> </li>
              <li><Link to='/contact' className='reactRouterLink' >Contacts</Link> </li>
            </ul>
        </div>
    );
}