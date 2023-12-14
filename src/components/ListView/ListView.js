import React from 'react'
import { NavLink } from 'react-router-dom';

function ListView({ products }) {
    return (
        <div className='list-view-section'>
            <div className='container'>
                {products.map((curElem) => {
                    const { id, name, image, price, description } = curElem;
                    return (
                        <div className='row cards' key={id}>
                            <div className='col-12 col-md-6'>
                                <figure>
                                    <img src={image} alt={name} />
                                </figure>
                            </div>
                            <div className='col-12 col-md-6 card-data-section'>
                                <div className='card-data'>
                                    <h3>{name}</h3>
                                    <p>₹{price / 100}</p>
                                    <p>{description.slice(0, 90)}</p>
                                    <NavLink to={`/singleproduct/${id}`}>
                                        <button className='button'>Read More</button>
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default ListView
