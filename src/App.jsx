import Container from './components/Container/Container';
import Form from './components/Form/Form';
import EditForm from './components/EditForm/EditForm';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import Filter from './components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectCurrentTodo } from './components/redux/todoSlice';

export const App = () => {
  // const dispatch = useDispatch();

  const currentTodo = useSelector(selectCurrentTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {!currentTodo ? <Form /> : <EditForm />}
          <Filter />
          <TodoList />
          <Text textAlign="center">Create your first todo😉</Text>
        </Container>
      </Section>
    </>
  );
};
