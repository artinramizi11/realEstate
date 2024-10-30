import React from 'react';
import {  createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import SingleProperty from './components/DisplaySingleProperty/SingleProperty';
import ListingsPage from './Pages/ListingsPage';
import FilterContextProvider from './components/FilterContext';  

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'find/:id',
      element: <SingleProperty />,
    },
    {
      path: 'listings',
      element: <ListingsPage />
    },
    {path: '*',
    element: <h1>Coming Soon... <Link to='/'>Back to home</Link></h1>
  }
  ])
  return (
    <div className="App">
      <FilterContextProvider>
        <RouterProvider router={router} />
      </FilterContextProvider>
          </div>
  );
}

export default App;
