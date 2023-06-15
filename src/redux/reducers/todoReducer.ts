import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AuthState {
  todoData: any;
}

// Define the initial state using that type
const initialState: AuthState = {
  todoData: {},
};

export const authReducer = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateTodoData: (state, action: PayloadAction<any>) => {
      state.todoData = action.payload;
    },
  },
});

export const { updateTodoData } = authReducer.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default authReducer.reducer;
