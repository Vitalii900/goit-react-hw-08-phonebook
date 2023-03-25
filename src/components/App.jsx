// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import HomePage from "./pages/HomePage";
import RegisterPage from './pages/Register';
import {LoginForm} from './LoginForm/LoginForm';
// import { useEffect } from 'react';
// import { fetchContacts } from './redux/contacts/contactsOperations';
// import { ContactList } from './ContactList/ContactList';
import ContactsPage from './pages/Contacts';
// import { Filter } from './Filter/Filter';

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
