import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import '../AppBar/AppBar.css';
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header className='header'>
      <Navigation />
      {/* <UserMenu /> */}
      <AuthNav />
    </header>
  );
};
