import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import '../Layout/Layout.css';

export const Layout = () => {
  return (
    <div className='container'>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};