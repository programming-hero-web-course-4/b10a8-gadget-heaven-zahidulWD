import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Pages/Home/Home';
import Error_page from "./Components/Pages/Error_page/Error_page";
import TabCards from './Components/Pages/TabsCards/TabCards';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Statistics from "./Components/Pages/Statistics/Statistics";
import DemoPage from './Components/Pages/DemoPage/DemoPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error_page></Error_page>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/tabs/:category',
            element: <TabCards></TabCards>,
            loader: () => fetch('../products.json'),
          },
          {
            path: '/',
            element: <TabCards />,
            loader: () => fetch('../products.json'),
          },
        ],
      },
      {
        path: '/products/:productId',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../products.json')
      },
      { 
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../products.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('../products.json')
      },
      {
        path: '/demo-page',
        element: <DemoPage></DemoPage>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
