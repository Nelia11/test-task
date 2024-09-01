import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import User from '../../interfaces/user';

// Define the async thunk for fetching user data
export const fetchUsersData = createAsyncThunk(
  'users/fetchUsersData',
  async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return (await response.json()) as User[];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export interface UsersState {
  data: User[];
  loading: boolean;
  error: string | null;
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

// Define the users slice
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        field: keyof UsersState['filters'];
        value: string;
      }>
    ) => {
      const { field, value } = action.payload;
      state.filters[field] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch users';
      });
  },
});

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;
