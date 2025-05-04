// import Text from '../Text/Text';
import { useSelector } from 'react-redux';
// import { selectTodos } from '../redux/todoSlice';
import Grid from '../Grid/Grid';
import Todo from '../Todo/Todo';
import { selectFilteredTodos } from '../redux/filterSlice';

const TodoList = () => {
  // const todos = useSelector(selectTodos);

  const filteredTodo = useSelector(selectFilteredTodos);
  // if (todos.length === 0) {
  //   return <Text textAlign="center">We did not find any todo 😯</Text>;
  // }
  return (
    <>
      <Grid>
        {filteredTodo.map((todo, index) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            counter={index + 1}
          />
        ))}
      </Grid>
    </>
  );
};

export default TodoList;
