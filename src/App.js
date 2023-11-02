import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Address from './components/options/address';
import SidebarLayout from './layouts/sidebarlayout';
import About from './pages/about';
import Customers from './pages/admin/customer';
import Dashboard from './pages/admin/dashboard';
import OrderAdmin from './pages/admin/order';
import ProductAdmin from './pages/admin/product';
import AddProduct from './pages/admin/product/addproduct';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Contact from './pages/contact';
import Home from './pages/home';
import ProductDetail from './pages/productdetail';
import Shop from './pages/shop';
import { PrivateDashboard } from './routes/private/admin';

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
      // <PrivateDashboard>
      <SidebarLayout />
      // </PrivateDashboard>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },

      {
        path: 'customer-list',
        element: <Customers />,
      },

      {
        path: 'product-list',
        element: <ProductAdmin />,
      },

      {
        path: 'add-product',
        element: <AddProduct />,
      },

      {
        path: 'order-list',
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
