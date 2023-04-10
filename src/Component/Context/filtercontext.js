import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./productcontext";

export const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    list_view: false,
    filters:{text: "", classtify: "All"},
};

export const FilterProvider = ({ children }) => {
    const { products } = useContext(AppContext);
    const reducer = (state, action) => {
        switch (action.type) {
            case "LOAD_FILTER_PRODUCTS":
                return {
                    ...state,
                    filter_products: [...action.payload],
                    all_products: [...action.payload],
                };
            case "SET_GRIDVIEW":
                return {
                    ...state,
                    list_view: false,
                }
            case "SET_LISTVIEW": 
                return {
                    ...state,
                    list_view: true,
                }
            case "UPDATE_FILTERS_VALUE":
                const{name, value} = action.payload;
                return {
                    ...state,
                    filters: {
                        ...state.filters, 
                        [name]: value,
                    }
                }
            case "FILTER_PRODUCT":
                let {all_products} = state;
                let tempFilterProduct = [...all_products];
                const {text, classtify} = state.filters;
                if(text) {
                    tempFilterProduct = tempFilterProduct.filter((crrElem) =>{
                        return crrElem.name.toLowerCase().includes(text);
                    })
                }
                if(classtify){
                    tempFilterProduct = tempFilterProduct.filter((crrElem) =>{
                        return crrElem.classtify === classtify;
                    })
                }
                return {
                    ...state,
                    filter_products: tempFilterProduct,
                }

            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" })
    }

    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" })
    }

    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPDATE_FILTERS_VALUE", payload :{name, value} })
    }

    useEffect(() =>{
        dispatch({type: "FILTER_PRODUCT"})
    }, [products, state.filters])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);
    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider