import React, { useEffect, useState } from 'react'
import './ApiCall.css'

const ApiCall = () => {
  const [product, setProduct] = useState([]);
  
  const fetchProducts = async () =>{
    try {
        const response = 
        await fetch('https://fakestoreapi.com/products') ;
        const data = await response.json()
        setProduct(data)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    fetchProducts()
  })

  return (
    <div>
        <h2>Product Available</h2>
        <div className='all_cards'>
            {product.map(product=>(
                <div className='single_card' key={product.id}>
                <div className='img_div'><img src={product.image}
                 alt={product.title}/></div>
                 <div className='details'>
                     <h3>{product.title}</h3>
                     <p>Price : ${product.price}</p>
                     <p>{product.description
                      .split(" ").slice(0,10).join(" ")}</p>
                     <button>Purchase</button>
                 </div>
              </div>
            ))
            }
        </div>
      
    </div>
  )
}

export default ApiCall
