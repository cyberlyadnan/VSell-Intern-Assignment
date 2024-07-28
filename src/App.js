import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Error from './components/pages/Error';
import Main from './components/Main';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Favorite from './components/pages/Favorite';
import Account from './components/pages/Account';

// Define the routes using createBrowserRouter
const RouterList = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
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

  // Render loader if still loading
  if (loading) {
    return <Loader />;
  }

  // Render the main app content
  return <RouterProvider router={RouterList} />;
};

export default App;
