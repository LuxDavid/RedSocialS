import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <>
        <ul className='nav__container'>
            <li className="nav__item"><NavLink to='#' className='nav__item--link'>Productos</NavLink></li>
            <li className="nav__item"><NavLink to='#' className='nav__item--link'>Carrito</NavLink></li>
            <li className="nav__item"><NavLink to='#' className='nav__item--link'>Personas</NavLink></li>
            <li className="nav__item"><NavLink to='#' className='nav__item--link'>Perfil</NavLink></li>
            <li className="nav__item"><NavLink to='#' className='nav__item--link'>Logout</NavLink></li>
        </ul>
    </>
  )
}

export default Nav