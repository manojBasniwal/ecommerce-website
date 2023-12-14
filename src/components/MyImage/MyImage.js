import React, { useState } from 'react'

function MyImage({imgs = [{url: ''}]}) {
    const [mainImage, setMainImage] = useState(imgs[0]);
   
  return (
    <div className='container my-image-section'>
        <div className='row my-image'>
            <div className='col-5'>
                {
                    imgs.map((curElm, index)=>{
                        return (
                            <figure key={index}>
                                <img className='box-image-style' src={curElm.url} alt={curElm.filename} onClick={()=> setMainImage(curElm)}/>
                            </figure>
                        )
                    })
                }
            </div>
            <div className='col-7'>
                <div className='main-screen'>
                    <img src={mainImage.url} alt={mainImage.filename}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyImage
