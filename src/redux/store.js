import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice.js'
import userSlice from './userSlice.js'

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    user:userSlice
  },
})