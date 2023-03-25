// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';

export default function Contacts() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm></ContactForm>
      <Filter></Filter>
      <ContactList></ContactList>
    </>
  );
}
