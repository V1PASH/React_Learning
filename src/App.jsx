
import './App.css'
import Card from './components/Card'
import Header from './components/Header';
import Account from './pages/account';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Setting from './pages/setting';
import About from './pages/About';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router=createBrowserRouter([
  {
    path:'/',
    element:<><Header/><Home/></>
  },
  {
    path:'/dashboard',
    element:<><Header/><Dashboard/></>
  },
  {
    path:'/Account',
    element:<><Header/><Account/></>
  },
  {
    path:'/setting',
    element:<><Header/><Setting/></>
  },
  {
    path:'/About',
    element:<><Header/><About/></>
  },
  {
    path:'/Account/:id'
  }
])


function App() {

  return (
    <>

    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
