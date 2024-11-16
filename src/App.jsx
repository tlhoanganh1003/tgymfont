import './App.css'
import User from './User/getUser/User';
import AddUser from './User/addUser/AddUser';
import UpdateUser from './User/updateUser/updateUser';
import HomePage from './homePage/homePage';
import LoginForm from './Auth/LoginForm';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />
    },
    {
      path: "/add",
      element: <AddUser />
    },
    {
      path: "/update/:id",
      element: <UpdateUser />
    },
    {
      path: "/home",
      element: <HomePage />
    },

    {
      path: "/login",
      element: <LoginForm />
    },
  ])

  return (
    <>
      <div className="App">
        <RouterProvider router={route}></RouterProvider>
      </div>
    </>
  )
}

export default App
