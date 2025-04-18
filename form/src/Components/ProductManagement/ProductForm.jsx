import React from 'react';
import { useState } from 'react';
const ProductForm = ({handleAddProducts}) => {
  const [error, setError] = useState("");
  const handleProductSubmit = (event) => {
   event.preventDefault();
   const name = event.target.name.value;
   const price = event.target.price.value;
   const quantity = event.target.quantity.value;
   if(name.length ===0){
    setError('plz provide a porduct name');
    return;
   }
   else if(price.length === 0){
    setError("plz provide a price");
    return;
   }
  else if(price < 1){
    setError('price cannot be negative');
    return;
  }
   else{
    setError('');
   }

  const newProduct = {
    name,
    price,
    quantity
  }
    handleAddProducts(newProduct);
  }


  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder='Product Name' />
        <br />
        <input type="text" name="price" placeholder='Product Price' />
        <br />
        <input type="text" name="quantity" placeholder='Product Quantity' />

        <br />
        <input type="submit" value="Submit"/>
      </form>
      <p style={{color:'red'}}>{error}</p>
    </div>
  );
};

export default ProductForm;