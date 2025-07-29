import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [],
    loading: false,
    error: null,
}

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        fetchCarsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchCarsSuccess: (state, action) => {
            state.loading = false;
            state.cars = action.payload;
        },
        fetchCarsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchCarsStart, fetchCarsSuccess, fetchCarsFailure } = carSlice.actions;

export default carSlice.reducer;
