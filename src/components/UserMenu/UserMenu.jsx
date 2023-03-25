import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import '../UserMenu/UserMenu.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="wrapper">
      <p className="useremail">{user.email}</p>
      <button
        className="logOutButton"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
