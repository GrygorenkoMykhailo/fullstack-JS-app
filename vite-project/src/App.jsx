import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '/profile/:id',
        element: <Profile/>,
    },
])

function App(){
    return (
        <RouterProvider router = {router}/>
    )
}

export default App