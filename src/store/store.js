import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../slicefuncion/cart.jsx'
// import Cart from '../componets/Cart

const store = configureStore({
    reducer:{
        cart:cartReducer
    }
});

export default store