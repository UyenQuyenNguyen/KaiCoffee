import axios from "axios";
import { useContext, useReducer } from "react";
import { createContext, useEffect } from "react";

const AppContext = createContext();
const API = "https://642c508e208dfe25472d4c1e.mockapi.io/api/v1/Product";

const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    featureProduct : [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "SET_API_DATA" :
            const featureData = action.payload.filter((curElem) =>{
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
        default:
            return state;
        }
    }

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }

    }

    useEffect(() => {
        getProducts(API);
    }, [])

    return <AppContext.Provider value={{ ...state }}>
        {children}
    </AppContext.Provider>
};

export const useProductContext = () => {
    return useContext(AppContext)
}


export default AppProvider