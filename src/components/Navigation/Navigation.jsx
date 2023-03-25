import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
import '../Navigation/Navigation.css';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
