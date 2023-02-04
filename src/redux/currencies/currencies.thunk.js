import { createAsyncThunk } from '@reduxjs/toolkit';
import { getConvert, getRecentExchange } from 'api/currenciesListAPI';
import Notiflix from 'notiflix';

export const getChange = createAsyncThunk(
    "change",
    async (data, { rejectWithValue }) => {
        try {
           const response = await getConvert(data);
            if (!response.success) {
            
            Notiflix.Report.failure('Incorrect data entered',  'Please enter according to the example above', 'OK');
           }
           return response;
        } 
        catch (error) {
           return rejectWithValue(error);
        }
    }
)

export const getCurrentRates = createAsyncThunk(
    "rates",
    async (data, { rejectWithValue }) => {
        try {
           const response = await getRecentExchange(data);
           return response;
        } 
        catch (error) {
           return rejectWithValue(error);
        }
    }
)