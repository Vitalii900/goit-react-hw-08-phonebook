import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const loginSuccess = () =>
  toast.success('You have logged in!', {
    position: toast.POSITION.BOTTOM_CENTER,
  });
