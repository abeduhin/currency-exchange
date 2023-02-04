import { createSlice } from '@reduxjs/toolkit';
import { getChange, getCurrentRates } from './currencies.thunk';

const initialState = {
    data: {},
    rates: {},
    loading: false,
    error: null,
  };

const currenciesSlice = createSlice({
    name: "currencies",
    initialState,
    extraReducers: builder => {
    builder 
       .addCase (getChange.pending, state => {
            state.loading = true;
            state.error = null;
        })
       .addCase (getChange.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.data = payload;
        })
       .addCase (getChange.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
       .addCase (getCurrentRates.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase (getCurrentRates.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.rates = payload;
        })
        .addCase (getCurrentRates.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
    }
});

export default currenciesSlice.reducer;