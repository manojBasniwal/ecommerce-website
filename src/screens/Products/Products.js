import React from 'react'
import PageWidthNavbar from '../../components/PageWidthNavbar'
import FilterSection from '../../components/FilterSection';
import Sort from '../../components/Sort';
import ProductList from '../../components/ProductList';


function Products() {
  return (
    <PageWidthNavbar>
      <div className='container'>
        <div className='row pt-4'>
        <div className='col-12 col-md-3'>
          <div className='filter-section'>
          <FilterSection/>
          </div>
        </div>
        <div className='col-12 col-md-9'>
        <div className='product-view-sort'>
          <div className='sort-filter'>
            <Sort/>
          </div>
          <div className='main-product'>
            <ProductList/>
          </div>
        </div>
        </div>
        </div>
      </div>
    </PageWidthNavbar>
  )
}

export default Products
