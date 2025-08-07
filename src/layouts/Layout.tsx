import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from '../pages/Footer';
import PageLoader from '../components/PageLoader';
import { usePageLoader } from '../hooks/usePageLoader';

const Layout = () => {
  const { isLoading } = usePageLoader({
    initialDelay: 300,
    minLoadingTime: 2000
  });

  return (
    <>
      <PageLoader isLoading={isLoading} text="Welcome to Amritha" />
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;