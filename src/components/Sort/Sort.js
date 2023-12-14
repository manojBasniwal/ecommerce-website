import React from 'react'
import {BsFillGridFill, BsList} from 'react-icons/bs';
import { useFilterContext } from '../../context/filter-context';

function Sort() {
  const {grid_view, setGridView, setListView, filter_products, sorting} = useFilterContext();
  return (
    <div className='sort-section'>
          <div className='sorting-list-grid'>
            <button className={grid_view ? 'active sort-btn' : 'sort-btn'}
            onClick={setGridView}>
              <BsFillGridFill className='icon'/>
            </button>
            <button className={!grid_view ? 'active sort-btn' : 'sort-btn'}
            onClick={setListView}>
              <BsList className='icon'/>
            </button>
          </div>
          <div className='product-data'>
            <p>{`${filter_products.length} Product Available`}</p>
          </div>
          <div className='sort-selection'>
            <form action="#">
              <label htmlFor="sort"></label>
              <select className='p-0.5' name="sort" id="sort" onClick={sorting}>
                <option value="lowest">Price(lowest)</option>
                <option value="#" disabled></option>
                <option value="highest">Price(highest)</option>
                <option value="#" disabled></option>
                <option value="a-z">Price(a-z)</option>
                <option value="#" disabled></option>
                <option value="z-a">Price(z-a)</option>
              </select>
            </form>
          </div>
    </div>
  )
}

export default Sort
