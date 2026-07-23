import React from 'react'
import ProductPage from '../pages/ProductPage';

const ProductDetails = () => {
    const products = [
    {
      id: 1,
      productName: "Wireless Mouse",
      price: 999,
      inStock: true,
    },
    {
      id: 2,
      productName: "Keyboard",
      price: 1499,
      inStock: false,
    },
    {
      id: 3,
      productName: "Headphones",
      price: 2499,
      inStock: true,
    },
    {
      id: 4,
      productName: "Monitor",
      price: 8999,
      inStock: true,
    },
    {
      id: 5,
      productName: "USB Cable",
      price: 299,
      inStock: false,
    },
  ];
  return (
   <>
   <ProductPage details = {products}/>
   
   </>
  )
}

export default ProductDetails