import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './Component/Context/cartcontext';
import FavouProvider from './Component/Context/favoucontext';
import LoginProvider from './Component/Context/logincontext';
import AppProvider from './Component/Context/productcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <AppProvider>
        <CartProvider>
            <LoginProvider>
                <FavouProvider>
                    <App />
                </FavouProvider>
            </LoginProvider>
        </CartProvider>
        </AppProvider>
    </div >
);


