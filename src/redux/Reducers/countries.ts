import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface CountryModel {
    createdAt: string,
    name: string,
    _id: string
}

interface CountriesState {
    loading: boolean
    countries: CountryModel[]
}

const initialState: CountriesState = {
    loading: false,
    countries: []
}

export const fetchCountries = createAsyncThunk('get/countries', async ():Promise<[CountryModel]> => {
    const response = await fetch("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries");
    return await response.json();
})

export const countrySlice = createSlice({
    name: "countries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.countries = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchCountries.rejected, (state) => {
            state.loading = false;
        });
    }
});

export default countrySlice.reducer;