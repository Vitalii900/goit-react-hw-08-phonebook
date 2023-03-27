import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import '../RegisterForm/RegisterForm.css';
import { Button, Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="registerForm" onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Username
        <Input type="text" name="name" />
      </label>
      <label className="label">
        Email
        <Input type="email" name="email" />
      </label>
      <label className="label">
        Password
        <Input type="password" name="password" />
      </label>
      <Button colorScheme="blue" type="submit">
        Register
      </Button>
    </form>
  );
};
