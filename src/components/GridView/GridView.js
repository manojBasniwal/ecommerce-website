import React from 'react'
import Product from "../Product";

function GridView({products}) {
  return (
    <div className='grid-view-section'>
      <div className='container grid-view'>
        {
          products.map((curElem)=>{
            return <Product key={curElem.id} {...curElem}/>
          })
        }

      </div>
      
    </div>
  )
}

export default GridView
