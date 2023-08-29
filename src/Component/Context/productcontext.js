import axios from "axios";
import { useContext, useReducer } from "react";
import { createContext, useEffect } from "react";
import { getallProducts } from "../../services/product";

export const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProduct: [],
    isSingleLoading: false,
    singleProduct: {},
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "SET_API_DATA":
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProduct: featureData,
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            }
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            }
        default:
            return state;
    }
}


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async () => {
        dispatch({ type: "SET_LOADING" })
        try {
            const response = await getallProducts();
            const products = await response.data.products;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }

    }

    const getSingleProduct = async () => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const response = await getallProducts();
            const singleProduct = await response.data.products;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct[0] });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return <AppContext.Provider value={{ ...state, getSingleProduct}}>
        {children}
    </AppContext.Provider>
};


export default AppProvider