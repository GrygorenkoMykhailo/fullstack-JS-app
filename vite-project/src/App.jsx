import { createBrowserRouter, RouterProvider,Form, useActionData } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import Login from "./Pages/Login";
import { Register,registerAction } from "./Pages/Register";
import { Profile, profileLoaderFunction } from "./Pages/Profile";

import ProfileErrorBoundary from "./ErrorBoundaries/ProfileErrorBoundary";
import RegisterErrorBoundary from "./ErrorBoundaries/RegisterErrorBoundary";

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
        action: registerAction,
        element: <Register/>,
    },
    {
        path: '/profile/:id',   
        element: <Profile/>,
        ErrorBoundary: ProfileErrorBoundary,
        loader: async({params}) => profileLoaderFunction(params),
    },
    {
        path: '/form',
        action: ({request,params}) => { return [request,params]},
        element: <Cmp/>
    }
])

function Cmp(){

    const response = useActionData();
    console.log(response);

    return (
        <>
        <Form action='/form' method="post">
            <input type="text" name="email" id="" />
            <input type="password" name="password" id="" />
            <button type="submit">send</button>
        </Form>
        </>
    )
}

function App(){
    return (
        <RouterProvider router = {router}/>
    )
}

export default App