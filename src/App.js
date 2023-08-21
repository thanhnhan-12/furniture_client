import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import About from './pages/about';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Contact from './pages/contact';
import Home from './pages/home';
import Shop from './pages/shop';
import './App.css';
import ProductDetail from './pages/productdetail';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/shop',
        element: <Shop />,
      },

      {
        path: '/about',
        element: <About />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },

      {
        path: '/productdetail/:productID',
        element: <ProductDetail />,
      },
    ],
  },

  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
