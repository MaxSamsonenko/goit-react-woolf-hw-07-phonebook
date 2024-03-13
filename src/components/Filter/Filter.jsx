import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { FilterWrap, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterWrap>
      <label htmlFor="filter">Find contacts by name:</label>
      <Input
        type="text"
        onChange={handleFilterChange}
        name="filter"
        id="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </FilterWrap>
  );
};
