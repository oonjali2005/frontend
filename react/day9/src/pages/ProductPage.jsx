import React from 'react'

const ProductPage = (p) => {
  const{details}=p
  return (
    <>
    <div>
  <div className="flex justify-between gap-6">
    {details.map((e, i) => (
      <div key={i} className="bg-yellow-300 p-4 rounded shadow">
        <h2>Product Details</h2>
        <p>Product Name: {e.productName}</p>
        <p>Price: {e.price}</p>
      </div>
    ))}
  </div>
</div>
    
    
    
    </>
  )
}

export default ProductPage