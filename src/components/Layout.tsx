import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header title="My Profile" />
      <main>
        <Outlet />
      </main>
      <Footer text="2026 · My Website" />
    </>
  );
}

export default Layout;
