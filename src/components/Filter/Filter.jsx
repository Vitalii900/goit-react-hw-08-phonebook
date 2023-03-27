import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../redux/contacts/slice';
import {  Input } from '@chakra-ui/react';

export function Filter() {
  const inputValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleFilterInput = event => {
    const { value } = event.currentTarget;
    dispatch(filter(value));
  };

  return (
    <div
      style={{ margin: 'auto', maxWidth: 320, marginBottom: 20, marginTop: 20 }}
    >
      <label>
        Find contacts by name
        <Input
          className="input"
          type="text"
          name="filter"
          onChange={handleFilterInput}
          value={inputValue}
        ></Input>
      </label>
    </div>
  );
}
