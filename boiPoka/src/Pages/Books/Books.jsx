import React from 'react';
import Book from './Book';
const Books = ({bookData}) => {
  return (
    <div className='grid grid-cols-3 gap-8 my-20'>
      {
        bookData.map(singleBook => <Book 
        singleBook = {singleBook}
        ></Book>)
      }
    </div>
  );
};

export default Books;