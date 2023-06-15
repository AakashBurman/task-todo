import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TodoState {
  todoData: any;
}

// Define the initial state using that type
const initialState: TodoState = {
  todoData: [],
};

export const todoReducer = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateTodoData: (state, action: PayloadAction<any>) => {
      state.todoData = { ...state.todoData, ...action.payload };
    },
  },
});

export const { updateTodoData } = todoReducer.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default todoReducer.reducer;
