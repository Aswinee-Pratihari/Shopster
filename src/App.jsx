import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PaymentComplete from './pages/PaymentComplete';

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
    },
    {
      path:"/complete",
      element:<PaymentComplete/>
    },
  {
    path:"/checkout",
    element:<Checkout/>
  }]
  },
]);

return (
  <>
  <RouterProvider router={router} />
   </>
)
}

export default App