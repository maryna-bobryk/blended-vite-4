import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../redux/todoSlice.js';

const Form = () => {
  const dispatch = useDispatch();

  const handleAddTodo = text => {
    const newTodo = {
      id: nanoid(),
      text,
    };
    dispatch(addTodo(newTodo));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.search.value.trim();
    if (!value) return;
    handleAddTodo(value);
    e.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
