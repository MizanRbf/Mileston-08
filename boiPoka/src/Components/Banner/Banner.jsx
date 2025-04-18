import React from 'react';

const Banner = () => {
  return (
    <div className='flex justify-center items-center bg-slate-200 p-20 rounded-xl mb-4 gap-40'>
      <div className='space-y-10'>
        <h1 className='text-5xl font-bold'>Books to freshen up your bookshelf</h1>
        <button className='bg-green-600 text-white px-4 py-2 rounded-md text-xl font-semibold'>View The List</button>
      </div>
      <div className=''>
        <img src="./assets/pngwing 1.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;