import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SWApiResult } from '../../types';

export const getPlanetsThunk = createAsyncThunk<
  SWApiResult,
  { user: string },
  { rejectValue: string }
>('getPlanets', async ({ user }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/`);

    console.log('RES => ', response.data);

    return !response.data ? null : response?.data;
  } catch (e: unknown) {
    const errorMessage = `Error Searching Users; ${
      e instanceof Error ? e.message : e
    }`;

    return rejectWithValue(errorMessage);
  }
});
