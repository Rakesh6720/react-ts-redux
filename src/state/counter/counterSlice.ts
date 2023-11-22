import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  isLoading: boolean;
  isError: boolean;
}

const initialState: CounterState = {
  value: 0,
  isLoading: false,
  isError: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    }),
      builder.addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
          state.isLoading = false;
          state.isError = false;
        },
      ),
      builder.addCase(incrementAsync.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
      builder.addCase(decrementAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      }),
      builder.addCase(
        decrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.isLoading = false;
          state.isError = false;
          state.value -= action.payload;
        },
      ),
      builder.addCase(decrementAsync.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  },
);

export const decrementAsync = createAsyncThunk(
  "counter/decrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  },
);

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
