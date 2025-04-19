const getStoredBook = () => {

  const storedBookDataStr = localStorage.getItem("readList");

  if(storedBookDataStr){
   const storedBookData = JSON.parse(storedBookDataStr);
   return storedBookData;
  }
  return [];
}

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();
  if(storedBookData.includes(id)){
    alert('Already exist.');
  }
  else{
    storedBookData.push(id);
  }

  setToStorage(storedBookData);
}

const setToStorage = (bookData) => {
const bookDataStringified = JSON.stringify(bookData);
localStorage.setItem('readList', bookDataStringified);
}

export {addToStoredDB, getStoredBook};