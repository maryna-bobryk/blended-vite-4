import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentTodo: null,
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    editTodo: (state, action) => {
      state.items = state.items.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );
    },
  },
});

export const todoReducer = slice.reducer;
export const { addTodo, deleteTodo, setCurrentTodo, editTodo } = slice.actions;

export const selectTodos = state => state.todolist.items;
export const selectCurrentTodo = state => state.todolist.currentTodo;
