import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import carReducer from './slices/carSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    cars: carReducer,
    cart: cartReducer,
    user: userReducer,
  }
});

export default store;