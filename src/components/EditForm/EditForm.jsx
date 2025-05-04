import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import style from './EditForm.module.css';
import {
  selectCurrentTodo,
  setCurrentTodo,
  editTodo,
} from '../redux/todoSlice';

const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);

  const handleChangeText = e => {
    dispatch(setCurrentTodo({ ...currentTodo, text: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTodo({ id: currentTodo.id, text: currentTodo.text }));
    dispatch(setCurrentTodo(null)); // скидаємо поточне todo
  };

  const handleCancel = () => {
    dispatch(setCurrentTodo(null)); // скидаємо поточне todo
  };

  const handleDeleteEdit = () => {
    dispatch(setCurrentTodo(null));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        id="text"
        className={style.input}
        placeholder="What do you want to edit?"
        name="text"
        required
        value={currentTodo ? currentTodo.text : ''}
        onChange={handleChangeText}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={handleDeleteEdit}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};

export default EditForm;
