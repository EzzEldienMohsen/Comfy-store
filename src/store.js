import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './features/cart/CartSlice'
import userReducer from './features/user/UserSlice.jsx'

export var store = configureStore({
  reducer: {
    cart: CartReducer,
    user: userReducer,
  },
})
