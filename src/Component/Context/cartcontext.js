import React, {Component, createContext, useReducer} from "react";

export const CartContext = createContext()

export const CartProvider = (props) => {
    const reducer = (state, action) =>{
        switch(action.type){
            case 'ADD':
                const tempstate = state.filter((item) => action.payload.id === item.id)
                if(tempstate.length > 0){
                    return state
                }else{
                    return [...state, action.payload];
                }
            case 'INSCREASE':
                const tempstate1 = state.map((item)=>{
                    if(item.id === action.payload.id){
                        return {...item, quantity:item.quantity + 1}
                    }else{
                        return item
                    }
                })
                return tempstate1;
            case 'DESCREASE':
                    const tempstate2 = state.map((item)=>{
                        if(item.id === action.payload.id){
                            return {...item, quantity:item.quantity - 1}
                        }else{
                            return item
                        }
                    })
                    return tempstate2;
            case 'REMOVE':
                const tempstate3 = state.filter((item) => item.id !== action.payload.id)
                return tempstate3
                

            default: return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, [])
    const info = {state, dispatch}
    return <CartContext.Provider value={info}>{props.children}</CartContext.Provider>

}

export default CartProvider
export const FavouContext = createContext()


