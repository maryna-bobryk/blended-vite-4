import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter } from '../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value.trim()));
  };
  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleFilter}
    />
  );
};

export default Filter;
