import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import GridItem from '../GridItem/GridItem';
import { deleteTodo, setCurrentTodo } from '../redux/todoSlice';
import style from './Todo.module.css';
import Text from '../Text/Text';

const Todo = ({ id, text, counter }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    dispatch(setCurrentTodo({ id, text, counter }));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO {counter}
        </Text>

        <Text>{text}</Text>
        <button
          onClick={handleDelete}
          className={style.deleteButton}
          type="button"
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button onClick={handleEdit} className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};

export default Todo;
