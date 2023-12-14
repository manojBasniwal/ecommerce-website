import React, { useEffect } from 'react'
import PageWidthNavbar from '../../components/PageWidthNavbar';
import { useParams } from 'react-router';
import { useProductContext } from '../../context/productcontext';
import MyImage from '../../components/MyImage';
import Star from '../../components/Star/Star';
import AddToCart from '../../components/AddToCart';

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  // const API = "https://api.pujakaitem.com/api/products";
  const { getSingleProduct, isSingleProduct, singleProduct } = useProductContext();
  const { id } = useParams();
  // console.log('id',id)

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [])

  return (
    <PageWidthNavbar>
      <div className='container single-product-section'>
        <div className='row'>
          <div className='col-12 col-md-6 product-images-section'>
            <div className='product-images'>
              <MyImage imgs={image} />
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='product-data'>
              <h2>{name}</h2>
              <Star stars={stars} reviews={reviews} />
              <p className='product-data-price'>
                MRP:
                <del>
                  ₹{price + 250000 / 100}
                </del>
              </p>
              <p className='product-data-price product-data-real-price'>
                Deal of the Day:₹{price / 100}
              </p>
              <p>{description}</p>
              <div className='product-data-warranty'>
                <div className='product-warranty-data'>
                  <i className="fa fa-truck-fast icon wrranty-icon"></i>
                  <p>Free Delivery</p>
                </div>
                <div className='product-warranty-data'>
                  <i className="fa-solid fa-recycle wrranty-icon"></i>
                  <p>30 Days Replacement</p>
                </div>
                <div className='product-warranty-data'>
                  <i className="fa fa-truck-fast icon wrranty-icon"></i>
                  <p>Rohan Delivered</p>
                </div>
                <div className='product-warranty-data'>
                  <i className="fa fa-shield-halved wrranty-icon"></i>
                  <p>2 Year Warranty</p>
                </div>
              </div>
              <div className='product-data-info'>
                <p>
                  Available : <strong>{stock > 0 ? 'In Stock' : "Not Available"}</strong>
                </p>
                <p>Id : <strong>{id}</strong></p>
                <p>Brand : <strong>{company}</strong></p>
              </div>
              <hr />
              <AddToCart product={singleProduct} />
            </div>
          </div>
        </div>
      </div>
    </PageWidthNavbar>
  )
}

export default SingleProduct
