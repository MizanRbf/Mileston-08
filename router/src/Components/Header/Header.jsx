import React from 'react';
import './Header.css'
import { NavLink } from 'react-router';
const Header = () => {
  return (
    <div>
      <h1>This is Header</h1>
      <nav>

        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='projects'>Projects</NavLink>
        <NavLink to='blogs'>Blogs</NavLink>
        <NavLink to='contact'>Contact</NavLink>
        <NavLink to='users'>Users</NavLink>
        <NavLink to='users2'>Users2</NavLink>
        <NavLink to='posts'>Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;