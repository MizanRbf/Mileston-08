import React from 'react';
import { MapPin } from 'lucide-react';
import { Users } from 'lucide-react';
import { NotebookText } from 'lucide-react';
const ReadBooks = ({b}) => {
  const {bookName, category,author, image, rating,tags,yearOfPublishing,publisher,totalPages} = b;
  return (
    <div>
      <div className="border border-slate-300 rounded-xl p-4 flex gap-10 mb-4">
       <div className='bg-slate-200 flex justify-center items-center rounded-xl p-8'>
       <img className='w-30 h-40' src={image} alt="" />
       </div>
       <div className='my-4 space-y-4'>
        
       <h2 className='text-3xl font-semibold'>{bookName}</h2>
       <h3>By: {author}</h3>
       <div className='flex gap-6 items-center'>
          <p className='font-bold'>Tag :</p>
        {
          tags.map(tag => 
          <p className='text-green-500 bg-green-50 px-4 py-2 rounded-2xl font-semibold'># {tag}</p>)
        }
        <div className='flex gap-2'>
        <MapPin/>
        <p>Year of Publishing: {yearOfPublishing}</p>
        </div>
        </div>

        <div className='flex gap-6'>
          <div className='flex gap-2'>
          <Users />
          <p>Publisher: {publisher}</p>
          </div>
         <div className='flex gap-2'>
         <NotebookText />
         <p>Page: {totalPages}</p>
         </div>
        </div>
       <hr className='w-full text-slate-300 my-4'/>


       <div className='flex gap-4'>
        <div className='bg-purple-100 text-purple-500 px-6 py-2 rounded-3xl font-semibold'>Category: {category}</div>
        <div className='bg-amber-100 text-amber-400 px-6 py-2 rounded-3xl font-semibold'>Rating: {rating}</div>
        <button className='bg-green-500 text-white px-6 py-2 rounded-3xl font-semibold'>View Details</button>
       </div>
       </div>
      </div>
    </div>
  );
};

export default ReadBooks;