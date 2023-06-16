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
    addTodoData: (state, action: PayloadAction<any>) => {
      let arr = state.todoData;
      arr?.push(action.payload);
      state.todoData = [...arr];
    },
    updateTodoIsMarked: (state, action: PayloadAction<any>) => {
      let arr = state.todoData;
      arr[action.payload].isMarked = !arr[action.payload].isMarked;
      state.todoData = [...arr];
    },
    deleteTodoData: (state, action: PayloadAction<any>) => {
      let arr = state.todoData;
      arr.splice(action.payload, 1);
      state.todoData = [...arr];
    },
    editTodoData: (state, action: PayloadAction<any>) => {
      let arr = state.todoData;
      arr[action.payload.index].task = action.payload?.task;
      state.todoData = [...arr];
    },
  },
});

export const { addTodoData, updateTodoIsMarked, deleteTodoData, editTodoData } =
  todoReducer.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default todoReducer.reducer;

// state.todoData = { ...state.todoData, ...action.payload };
