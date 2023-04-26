import { createSlice } from '@reduxjs/toolkit';

export interface Country {
    createdAt: string;
    name: string;
    id: string;
}

export interface CountriesState {
    countries: Country[];
    loading: boolean;
    error: string | null;
}

const initialState = {
  countries: [],
  loading: false,
  error: null
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getCountriesStart: (state) => {
      state.loading = true;
    },
    getCountriesSuccess: (state, action) => {
      state.loading = false;
      state.countries = action.payload;
    },
    getCountriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { getCountriesStart, getCountriesSuccess, getCountriesFailure } = countriesSlice.actions;

export default countriesSlice.reducer;