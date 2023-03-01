import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/about-me',
    element: <About/>,
  },
  {
    path: '/projects',
    element: <Projects/>,
  }
]);

function App() {
  return (
    <div className="main">

        <Header />

        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>

    </div>
  );
}

export default App;
