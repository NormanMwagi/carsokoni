import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to fetch cars
export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/cars");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const carSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    loading: false,
    error: null,
    filters: {
      priceRange: [0, 30000000],
      brands: [],
      categories: [],
      searchTerm: ""
    },
    sortBy: "price_low"
  },
  reducers: {
    // Action to apply filters
    filterCars: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    
    // Action to set sorting method
    sortCars: (state, action) => {
      state.sortBy = action.payload;
    },
    
    // Action to reset all filters
    resetFilters: (state) => {
      state.filters = {
        priceRange: [0, 30000000],
        brands: [],
        categories: [],
        searchTerm: ""
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { filterCars, sortCars, resetFilters } = carSlice.actions;
export default carSlice.reducer;