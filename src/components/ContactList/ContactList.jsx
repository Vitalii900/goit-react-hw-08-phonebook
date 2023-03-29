import '../ContactList/ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  deleteContact,
  fetchContacts,
} from '../redux/contacts/contactsOperations';
import { Button, Text } from '@chakra-ui/react';

export function ContactList() {
  const dispatch = useDispatch();
  const arrayOfContacts = useSelector(state => state.contacts.items);
  const valueOfFilter = useSelector(state => state.filter);
  const visibleContacts = arrayOfContacts.filter(contact =>
    contact.name.toLowerCase().includes(valueOfFilter.toLowerCase())
  );

  async function deleteContactById(id) {
    await dispatch(deleteContact(id));
    dispatch(fetchContacts());
  }

  return (
    <>
      {arrayOfContacts.length === 0 ? (
        <Text textAlign={['center']} fontSize="xl">
          You don`t have a contacts yet!
        </Text>
      ) : (
        <ul className="list">
          {visibleContacts.map(contact => {
            return (
              <li className="item" key={contact.id}>
                <p className="contact">
                  <PhoneIcon /> {contact.name}: {contact.number}
                </p>
                <Button
                  colorScheme="red"
                  onClick={() => deleteContactById(contact.id)}
                >
                  <DeleteIcon />
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
