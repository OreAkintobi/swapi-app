import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { Planet } from '../../types';
import { getPlanetsThunk } from '../thunks';

export interface PlanetState {
  value: Planet[] | null;
}

const initialState: PlanetState = {
  value: null,
};

export const planetSlice = createSlice({
  name: 'planet',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPlanetsThunk.pending, (state) => ({
      ...state,
      loading: true,
      value: null,
      error: null,
    }));
    builder.addCase(getPlanetsThunk.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      value: payload.results ?? [],
    }));
    builder.addCase(getPlanetsThunk.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload ?? null,
    }));
  },
});

export default planetSlice.reducer;
