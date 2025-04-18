import React from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import { useState } from 'react';
const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const handleAddProducts = (newProduct) => {
     const newProducts = [...products,newProduct];
     setProducts(newProducts);
  }
  console.log(products);
  return (
    <div>
      <ProductForm handleAddProducts={handleAddProducts}></ProductForm>
      <ProductTable products = {products}></ProductTable>
    </div>
  );
};

export default ProductManagement;