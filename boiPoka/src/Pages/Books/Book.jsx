import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

const Book = ({book}) => {
  const {bookId, bookName, category,author, publisher, image, rating, review,tags} = book;
  return (
    <div>
      <Link to={`bookDetails/${bookId}`}>
      <div className="border border-slate-300 rounded-xl p-4">
       <div className='bg-slate-200 flex justify-center items-center rounded-xl p-8'>
       <img className='w-30 h-46' src={image} alt="" />
       </div>
       <div className='my-4 space-y-4'>
        <div className='flex justify-around'>
          {
            tags.map(tag => 
              <div>
                <button className='bg-green-100 text-green-600 font-semibold px-4 py-1 rounded-md'>{tag}</button>
              </div>
            )
          }
        </div>
       <h2 className='text-xl font-semibold'>{bookName}</h2>
       <h3>By: {author}</h3>
       <hr className='w-full border-dashed text-slate-300 my-4'/>
       <div className='flex justify-between'>
        <p>{category}</p>
        <div className='flex gap-2'>
        <p>{rating}</p>
        <Star className='w-4'/>
        </div>
       </div>
       </div>
      </div>
      </Link>
    </div>
  );
};

export default Book;