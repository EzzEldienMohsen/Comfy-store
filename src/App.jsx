/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { store } from './store'
import {
  About,
  Cart,
  Orders,
  Error,
  CheckOut,
  HomeLayout,
  Landing,
  Login,
  Products,
  Register,
  SingleProduct,
  SinglePageError,
} from './pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// loaders
import { loader as featuredLoader } from './components/FeaturedLoading'
import { loader as SingleProductLoader } from './pages/SingleProduct'
import { loader as productsLoader } from './pages/Products'
import { loader as checkoutLoader } from './pages/CheckOut'
import { loader as orderLoader } from './pages/Orders.jsx'
// actions
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as checkoutAction } from './components/CheckoutForm'

var queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
})

var router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: featuredLoader(queryCLient),
      },
      { path: '/about', element: <About /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '/checkout',
        element: <CheckOut />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryCLient),
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: orderLoader(store, queryCLient),
      },
      {
        path: '/products',
        element: <Products />,
        errorElement: <SinglePageError />,
        loader: productsLoader(queryCLient),
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
        errorElement: <SinglePageError />,
        loader: SingleProductLoader(queryCLient),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
])
const App = () => {
  return (
    <QueryClientProvider client={queryCLient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
