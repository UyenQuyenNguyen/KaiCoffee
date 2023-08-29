import { createContext, useState, useReducer } from "react";

export const FavouContext = createContext();

export const FavouProvider = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const tempstate = state.filter((item) => action.payload.id === item.id)
                if (tempstate.length > 0) {
                    return state
                } else {
                    return [...state, action.payload];
                }
            case 'REMOVE':
                const tempstate3 = state.filter((item) => item.id !== action.payload.id)
                return tempstate3
            default: return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, [])
    const favou = { state, dispatch }
    return (
        <FavouContext.Provider value={favou}>
            {props.children}
        </FavouContext.Provider>
    )

}

export default FavouProvider;