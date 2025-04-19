import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/addToDB';
import ReadBooks from '../ReadBooks/ReadBooks';
const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const bookData = useLoaderData();

   const [sortBy,setSortBy] = useState(false);

   const handleSortButton = () => {
     setSortBy(!sortBy);
   }

   const [sort,setSort] = useState('');
   const handleSort =(type)=> {
    setSort(type);
    if(type === 'Ratings'){
      const sortByRatings = [...readList].sort((a,b) => a.rating - b.rating);
      setReadList(sortByRatings);
    };
    if(type === 'Pages'){
      const sortByPages = [...readList].sort((a,b) => a.totalPages - b.totalPages);
      setReadList(sortByPages);
    };
    if(type === 'Publisher Year'){
      const sortByPublisherYear = [...readList].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing);
      setReadList(sortByPublisherYear);
    };

   }

  useEffect(()=>{
    const storedData = getStoredBook();
    const convertedStoredData = storedData.map(id => parseInt(id));
    const myReadList = bookData.filter(book => convertedStoredData.includes(book.bookId));
    setReadList(myReadList);
  },[])
  return (
    <div>
      <button onClick={handleSortButton} className='border px-4 py-2 rounded-lg mb-2 block cursor-pointer'>Sort By: {sort?sort:""}</button>
      <ul
      className={`border py-1 mb-4 rounded-lg ${sortBy?'inline-block':'hidden'}`}>
        <li className='hover:bg-slate-200 px-4 py-1 cursor-pointer'><a onClick={()=>handleSort('Ratings')}>Rating</a></li>
        <li className='hover:bg-slate-200 px-4 py-1 cursor-pointer'><a onClick={()=>handleSort('Pages')}>Pages</a></li>
        <li className='hover:bg-slate-200 px-4 py-1 cursor-pointer'><a onClick={()=>handleSort('Publisher Year')}>Publisher Year</a></li>
      </ul>
      <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>WishList Books</Tab>
    </TabList>

    <TabPanel className='mb-10'>
      <h2 className='text-2xl font-semibold my-3'>Books I Read {readList.length}</h2>
      {
        readList.map(b => <ReadBooks b={b}></ReadBooks>)
      }
    </TabPanel>
    <TabPanel>
      <h2>WishList Books</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ReadList;