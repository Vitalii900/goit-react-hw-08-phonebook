import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import '../LoginForm/LoginForm.css';
import { Button, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Email
        <Input type="email" name="email" />
      </label>
      <label className="label">
        Password
        <Input type="password" name="password" />
      </label>
      <Button colorScheme="blue" type="submit">
        Log In
      </Button>
    </form>
  );
};
