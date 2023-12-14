import React from 'react'
import { NavLink } from 'react-router-dom';

function Product(curElem) {
    const {id, name, price, image, category} = curElem;
    // console.log('manoj',curElem)
  return (
    <NavLink to={`/singleproduct/${id}`} className='card-section'>
        <div className='card'>
            <figure>
                <img src={image} alt={name}/>
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className='card-data'>
                <div className='card-data-flex'>
                    <h6>{name}</h6>
                    <h6 className='card-data-price'>₹{price / 100}</h6>
                </div>
            </div>
        </div>
    </NavLink>
  )
}

export default Product
