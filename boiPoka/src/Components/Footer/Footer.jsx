import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black text-white py-20 flex justify-between p-20'>
      <div className='text-4xl font-bold'>BookVibe</div>
      <div>
        <h3 className='text-xl font-bold'>Links</h3>
        <ul className='space-y-2 mt-4'>
          <li>Home</li>
          <li>Listed Books</li>
          <li>Pages to Read</li>
        </ul>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
};

export default Footer;