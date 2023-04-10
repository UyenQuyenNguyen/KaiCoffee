import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './Component/Context/cartcontext';
import FavouProvider from './Component/Context/favoucontext';
import LoginProvider from './Component/Context/logincontext';
import AppProvider from './Component/Context/productcontext';
import CustomerProvider from './Component/Context/customercontext';
import FilterProvider from './Component/Context/filtercontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <AppProvider>
            <CartProvider>
                <FavouProvider>
                    <LoginProvider>
                        <CustomerProvider>
                            <FilterProvider>
                                <App />
                            </FilterProvider>
                        </CustomerProvider>
                    </LoginProvider>
                </FavouProvider>
            </CartProvider>
        </AppProvider>
    </div >
);


