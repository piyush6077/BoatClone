import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Display from './components/Display';
import './index.css'
import Footer from './components/Footer';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Details from './components/Details';
import { Provider } from 'react-redux'
import { store } from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Display />
        <Footer />
      </>
    ),
    errorElement: <div>404 ERROR PAGE</div>,
  },
  {
    path: '/boatPersonalization',
    element: (
      <>
        <Navbar />
        <Page1/>
        <Footer />
      </>
    ),
    errorElement: <div>404 ERROR PAGE</div>,
  },
  {
    path:'/giftWithBoat',
    element: (
      <>
        <Navbar/>
        <Page2/>
        <Footer/>
      </>
    )
  },
  {
    path:'/:slug',
    element:(
      <>
        <Navbar/>
        <Details/>
        <Footer/>
      </>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
