import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../ContactForm/ContactForm.css';
import {
  addContact,
  fetchContacts,
} from '../redux/contacts/contactsOperations';
import { Button, Input } from '@chakra-ui/react';
import { repeatName } from '../utils/notification';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const arrayOfContacts = useSelector(state => state.contacts.items);
  const findRepeateName = arrayOfContacts.find(contact => {
    return contact.name.includes(name);
  });

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Something wrong');
        break;
    }
  };

  const sendData = async event => {
    event.preventDefault();
    if (findRepeateName) {
      repeatName(findRepeateName.name);
      return;
    }
    await dispatch(addContact({name, number}));
    dispatch(fetchContacts());
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="contactForm" onSubmit={sendData}>
      <label className="label">
        Name
        <Input
          className="input"
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="label">
        Number
        <Input
          className="input"
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button colorScheme="blue" type="submit">
        Add contact
      </Button>
    </form>
  );
};
