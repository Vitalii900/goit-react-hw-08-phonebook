import { NavLink } from 'react-router-dom';
import '../AuthNav/AuthNav.css';
import { ChangeThemeButton } from '../utils/ChangeThemeButton';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className="link" to="/register">
        Register
      </NavLink>
      <NavLink className="link" to="/login">
        Log In
      </NavLink>
      <ChangeThemeButton />
    </div>
  );
};
