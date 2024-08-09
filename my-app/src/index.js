import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Componets/Homepage';
import About from './Componets/About';
import Orders from './Componets/orders';
import StockSearch from './Componets/stock';



// import Buy from './Componets/Buy';


const items = [
  { name: 'iPhone 14 Pro', stock: 15 },
  { name: 'Samsung Galaxy S23', stock: 12 },
  { name: 'MacBook Pro 16"', stock: 7 },
  { name: 'Dell XPS 13', stock: 10 },
  { name: 'Sony WH-1000XM5 Headphones', stock: 25 },
  { name: 'Apple Watch Series 8', stock: 20 },
  { name: 'Amazon Echo Dot', stock: 18 },
  { name: 'iPad Pro 12.9"', stock: 14 },
  { name: 'Samsung QLED 4K TV', stock: 6 },
  { name: 'HP Spectre x360', stock: 8 },
  { name: 'Google Pixel 7', stock: 10 },
  { name: 'Microsoft Surface Laptop 4', stock: 9 },
  { name: 'Bose QuietComfort Earbuds', stock: 22 },
  { name: 'Nintendo Switch', stock: 13 },
  { name: 'Sony PlayStation 5', stock: 5 },
  { name: 'Xbox Series X', stock: 7 },
  { name: 'Canon EOS R6 Camera', stock: 4 },
  { name: 'GoPro Hero 11', stock: 16 },
  { name: 'Fitbit Charge 5', stock: 19 },
  { name: 'DJI Mavic Air 2 Drone', stock: 11 },
];



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  
  {
    path: '/home',
    element: <Home />,
  }, 
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
  {
    path: '/stock',
    element: <StockSearch items = {items}/>,
  },

  
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
