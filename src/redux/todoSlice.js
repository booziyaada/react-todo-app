import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: ["Learn React", "Build Apps"],
  completedTodos: [],
};

// you cannot call the reducer directly. Rather, you shoudl dispatch an action and the reducer will be called automatically.
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    removeTodo: (sliceState, action) => {
      const indexToBeRemoved = action.payload;
      sliceState.completedTodos = sliceState.completedTodos.filter(
        (todo, index) => {
          return index !== indexToBeRemoved;
        }
      );
    },
    markAsDone: (sliceState, action) => {
      const index = action.payload;
      const markedTodo = sliceState.todos[index];
      sliceState.todos = sliceState.todos.filter((todo, i) => {
        return i !== index;
      });
      sliceState.completedTodos.push(markedTodo);
    },
    editTodo: () => {},
    addTodo: (sliceState, action) => {
      const newTodo = action.payload;
      sliceState.todos.push(newTodo);
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeTodo, editTodo, addTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;

export const todosSelector = (state) => state.todos.todos;
export const completedTodosSelector = (state) => state.todos.completedTodos;
