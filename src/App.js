import React, { useEffect, useState, Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Error from './components/pages/Error/Error';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load the page components
const Main = lazy(() => import('./components/Main'));
const Shop = lazy(() => import('./components/pages/Shop/Shop'));
const Cart = lazy(() => import('./components/pages/Cart/Cart'));
const Favorite = lazy(() => import('./components/pages/Favorite/Favorite'));
const Account = lazy(() => import('./components/pages/Account/Account'));

// Define the routes using createBrowserRouter
const RouterList = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer />
      </>
    ),
    errorElement: <Error />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/shop', element: <Shop /> },
      { path: '/explore', element: <Main /> },
      { path: '/cart', element: <Cart /> },
      { path: '/favorite', element: <Favorite /> },
      { path: '/account', element: <Account /> },
    ],
  },
]);

const App = () => {
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // useEffect to handle the loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Function to show a toast notification
  const notify = (message) => {
    toast(message);
  };

  // Render loader if still loading
  if (loading) {
    return <Loader />;
  }

  // Render the main app content
  return (
    <>
      <RouterProvider router={RouterList} />
      <ToastContainer position="bottom-right" autoClose={500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};

export default App;
