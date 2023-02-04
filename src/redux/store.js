import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './currencies/currencies.slice';


const store = configureStore({
    reducer: currenciesReducer
  });
  
  export default store;
