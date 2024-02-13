import React from 'react'

function Hello({ products }) {
    
  return (
    <div><center>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong> - ${product.price}
              <button >Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
      </center></div>
  )
}

export default Hello