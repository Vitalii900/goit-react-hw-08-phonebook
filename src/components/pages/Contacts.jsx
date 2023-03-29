import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { Spinner } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm></ContactForm>
      <Filter></Filter>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <Spinner />
        </div>
      ) : (
        <ContactList></ContactList>
      )}
    </main>
  );
}