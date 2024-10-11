import React from 'react'
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <div>
        <section className='card'>
                <img src={img}
                alt={title} className='card-img' />
                <div className='card-details'>
                    <h3 className='card-title'>{title}</h3>
                    <section className='card-review'>
                        <div className='rating-star'>
                        {star}{star}{star}{star}
                        </div>
                        
                        <span className='total-reviews'>{reviews}</span>
                    </section>
                    <section className='card-price'>
                        <div className='price'>
                            <del>{prevPrice}</del> {newPrice}
                        </div>
                        <div className='bag-icon'>
                        <BsFillBagHeartFill />
                        </div>
                    </section>
                </div>
        </section>
    </div>
  )
}

export default Card