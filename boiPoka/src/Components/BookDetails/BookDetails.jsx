import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utilities/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const BookDetails = () => {
  const {id} = useParams();
  const Id = parseInt(id);
  const bookData = useLoaderData();
  const singleBook = bookData.find(book => book.bookId === Id);
  
  const {bookName, category, author, image, publisher, rating, review, tags, totalPages, yearOfPublishing} = singleBook;

  const handleMarkAsRead = (bookId) => {
    addToStoredDB(bookId);
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }
  
  return (
    <div className='flex gap-10 my-20'>
      {/* bookImage */}
      <div className='bg-slate-200 p-10 rounded-xl w-1/2'>
       <img className='' src={image} alt="" />
      </div>
      {/* BookDetails */}
      <div className='w-1/2 space-y-4'>
        <h1 className='text-4xl font-semibold'>{bookName}</h1>
        <p>By: {author}</p>
        <hr className='w-full text-gray-300 my-4'/>
        <p>{category}</p>
        <hr className='w-full text-gray-300 my-4'/>
        <p><span className='font-bold'>Review:</span> {review}</p>
        <div className='flex gap-10'>
          <p className='font-bold'>Tag :</p>
        {
          tags.map(tag => 
          <p className='text-green-500 bg-green-100 px-4 py-1 rounded-lg font-semibold'># {tag}</p>)
        }
        </div>
        <hr className='w-full mt-4 text-gray-300'/>
        <p className='font-bold'><span className='inline-block w-52 font-normal'>Number of page:</span> {totalPages}</p>
        <p className='font-bold'><span className='inline-block w-52 font-normal'>Publisher:</span> {publisher}</p>
        <p className='font-bold'><span className='inline-block w-52 font-normal'>Year of Publishing:</span> {yearOfPublishing}</p>
        <p className='font-bold'><span className='inline-block w-52 font-normal'>Rating:</span> {rating}</p>
        <div className=''>
        <button onClick={()=>handleMarkAsRead(id)} className='border border-black py-2 px-6 rounded-lg mr-4 text-lg font-semibold'>Mark as Read</button>
        <button className='bg-cyan-500 py-2 px-6 rounded-lg mr-4 text-lg font-semibold text-white'>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;