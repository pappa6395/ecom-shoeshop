import React from 'react'
import "./Products.css"

const Products = ({result}) => {

  return (
    <div>
        <section className='card-container'>
            {result}
        </section>
    </div>
  )
}

export default Products