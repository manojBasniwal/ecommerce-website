import { createContext , useContext, useEffect, useReducer, } from "react";
import { useProductContext} from './productcontext';
import reducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: false,
    sorting_value: "lowest",
}

export const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState)

    // to set the grid view
    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"})
    }
    const setListView = () => {
        return dispatch({type: "SET_LIST_VIEW"})
    }
    // sorting function
    const sorting = (event)=>{
        let userValue = event.target.value;
        dispatch({type: 'GET_SORT_VALUE', payload: userValue})
    }

    //update the filter values
    // const updateFilterValue = (event) => {
    //     let name = event.target.name;
    //     let value = event.target.value;

    //     return dispatch({type: ""})
    // }
    
    //to sort the product
    useEffect(()=>{
        dispatch({type: "SORTING_PRODUCTS"})
    }, [state.sorting_value]);

    useEffect(()=>{
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products})
    }, [products])

    return (
        <FilterContext.Provider value= {{ ...state, setGridView, setListView, sorting }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () =>{
    return useContext(FilterContext);
}