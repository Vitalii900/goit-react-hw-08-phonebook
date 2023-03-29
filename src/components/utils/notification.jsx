import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const loginSuccess = () =>
  toast.success('You have logged in!', {
    position: toast.POSITION.BOTTOM_CENTER,
  });

export const loginError = () =>
  toast.error('Wrong name or password!', {
    position: toast.POSITION.BOTTOM_CENTER,
  });

export const registerSuccess = () =>
  toast.success('Account created!', {
    position: toast.POSITION.BOTTOM_CENTER,
  });

export const registerError = () =>
  toast.error('Somthing wrong!', {
    position: toast.POSITION.BOTTOM_CENTER,
  });

export const repeatName = name =>
  toast.warn(`${name} is already in contacts!`, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
