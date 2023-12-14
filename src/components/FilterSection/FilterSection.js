import React from 'react'
import { useFilterContext } from '../../context/filter-context'

function FilterSection() {
  const {all_products} = useFilterContext();

  //TO GET THE UNIQUE DATA OF EACH FIELDS
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem)=>{
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  }

  //WE NEED UNIQUE DATA
  const categoryOnlyData = getUniqueData(all_products, "category");
  return (
    <>
    <div className='filtere-section'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' name='text' value={text}/>
      </form>
    </div>
    <div className='filter-category'>
      <h3>Category</h3>
      <div>
        {
          categoryOnlyData.map((curElem, index)=> {
            return <button key={index} type="button" name='category' onClick={updateFilterValue}>

            </button>
          })
        }
      </div>      
    </div>
    </>
  )
}

export default FilterSection
