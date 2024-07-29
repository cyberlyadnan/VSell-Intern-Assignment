import React, { useEffect, useState, Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Helper Components/Loader';
import Error from './components/pages/Error/Error';
import 'react-toastify/dist/ReactToastify.css';
import Notification from './components/Helper Components/Notification';

// Lazy load the page components for better performance
const Main = lazy(() => import('./components/pages/Home/Main'));
const Shop = lazy(() => import('./components/pages/Shop/Shop'));
const Cart = lazy(() => import('./components/pages/Cart/Cart'));
const Favorite = lazy(() => import('./components/pages/Favorite/Favorite'));
const Account = lazy(() => import('./components/pages/Account/Account'));

// Define routes and their associated components
const RouterList = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header /> {/* Common header for all pages */}
        <Suspense fallback={<Loader />}> {/* Loader while components are loading */}
          <Outlet /> {/* Renders the matched child route */}
        </Suspense>
        <Footer /> {/* Common footer for all pages */}
      </>
    ),
    errorElement: <Error />, // Error page for undefined routes
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
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Show loader while loading
  if (loading) {
    return <Loader />;
  }

  // Render the main app content
  return (
    <>
      <RouterProvider router={RouterList} /> {/* Router provider to manage routes */}
      <Notification />
    </>
  );
};

export default App;
