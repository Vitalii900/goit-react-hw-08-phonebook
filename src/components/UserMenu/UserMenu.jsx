import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { ChangeThemeButton } from '../utils/ChangeThemeButton';
import { Button} from '@chakra-ui/react';
import '../UserMenu/UserMenu.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="wrapper">
      <p className="useremail">{user.email}</p>
      <Button
        colorScheme="blue"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
      <ChangeThemeButton />
    </div>
  );
};
