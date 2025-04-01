import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import cartReducer from '../redux/features/cart/cartSlice'

// Persist config
const persistConfig = {
  key: "cart",
  storage, // Local storage
};

// Create persisted reducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart : persistedCartReducer
  },
})


// Persistor
export const persistor = persistStore(store);