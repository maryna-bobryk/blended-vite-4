import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectTodos } from './todoSlice';

const initialState = {
  filter: '',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const selectFilter = state => state.filter.filter;
export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) =>
    todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    ),
);
