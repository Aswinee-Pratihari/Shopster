import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';

const App = () => {
 const AppLayout=()=>(
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
 )

 const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      path:"shop",
      element:<Shop/>
    },{
      path:"shop/:id",
      element:<ProductDetails/>
    },{
      path:"/cart",
      element:<Cart/>
    },{
      path:"about",
      element:<About/>
    },
  {
    path:"/checkout",
    element:<Checkout/>
  },{
    path:"/login",
    element:<Login/>
  },{
    path:"/register",
    element:<Register/>
  },]
  },
]);

return (
  <>
  <RouterProvider router={router} />
   </>
)
}

export default App