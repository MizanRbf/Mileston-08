import React from 'react';
import { NavLink } from 'react-router';
const Navbar = () => {
  return (
    <div className='flex justify-between py-6 items-center'>
      <div>
        <h1 className='text-2xl font-bold'>Book Vibe</h1>
      </div>
      <div className='text-md space-x-6 font-[400]'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="./about">About</NavLink>
        <NavLink to="readList">ReadList</NavLink>
        <NavLink>Pages to Read</NavLink>
      </div>
      <div>
        <button className='bg-green-600 px-4 py-2 text-white rounded-lg mr-4 font-bold'>Sign In</button>
        <button className='bg-cyan-600 px-4 py-2 text-white rounded-lg font-bold'>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;