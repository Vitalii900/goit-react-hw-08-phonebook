import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from '../components/Layout';
import { useEffect, lazy } from 'react';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from './redux/auth/operations';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('../components/pages/HomePage'));
const RegisterPage = lazy(() => import('../components/pages/Register'));
const LoginPage = lazy(() => import('../components/pages/Login'));
const ContactsPage = lazy(() => import('../components/pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
