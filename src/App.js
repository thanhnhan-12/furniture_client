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
import Cart from './pages/cart';
import Checkout from './pages/checkout';
// import { PrivateUser } from './routes/private/user';
import { useAppSelector } from './redux';
import Address from './components/options/address';
import MainLayout from './layouts/mainlayout';
import { PrivateDashboard } from './routes/private/admin';
import Dashboard from './pages/admin/dashboard';
import SidebarLayout from './layouts/sidebarlayout';
import Customers from './pages/admin/customer';
import ProductAdmin from './pages/admin/product';
import OrderAdmin from './pages/admin/order';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function Func() {
  const { token } = useAppSelector((state) => state.authSlice);

  return token;
}

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
        path: '/cart',
        element: (
          // <PrivateUser>
          <Cart />
          // </PrivateUser>
        ),
      },

      {
        path: '/checkout',
        element: (
          // <PrivateUser>
          <Checkout />
          // </PrivateUser>
        ),
      },

      {
        path: '/product/:productID',
        element: <ProductDetail />,
      },

      {
        path: '/address',
        element: <Address />,
      },

      {
        path: '/register',
        element: <Register />,
      },

      {
        path: '/login',
        element: <Login />,
      },
    ],
  },

  {
    path: 'admin',
    element: (
      <PrivateDashboard>
        <SidebarLayout />
      </PrivateDashboard>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },

      {
        path: 'customers',
        element: <Customers />,
      },

      {
        path: 'products',
        element: <ProductAdmin />,
      },

      {
        path: 'orders',
        element: <OrderAdmin />,
      },
    ],
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
