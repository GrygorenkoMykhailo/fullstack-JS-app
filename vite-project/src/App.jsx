import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Profile, profileLoaderFunction } from "./Pages/Profile";

import ProfileErrorBoundary from "./ErrorBoundaries/ProfileErrorBoundary";

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
        ErrorBoundary: ProfileErrorBoundary,
        loader: async({params}) => profileLoaderFunction(params),
    },
])

function App(){
    return (
        <RouterProvider router = {router}/>
    )
}

export default App