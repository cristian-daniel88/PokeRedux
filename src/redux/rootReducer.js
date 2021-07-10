import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./products/productsReducer";
import categoriesReducer from './categories/categoriesReducer';
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import ordersReducer from "./orders/ordersReducers";


const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer,
    user: userReducer,
    orders: ordersReducer
    
 
});

export default persistReducer(persistConfig, rootReducer);
