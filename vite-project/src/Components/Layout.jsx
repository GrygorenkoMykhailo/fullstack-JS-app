import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice"
import { useEffect } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";

const userCredentials = {Email: '',Password: ''}

export default function Layout(){
    const dispatch = useDispatch();
    const fetchState = useSelector(state => state.users.state);
    useSelector(state => (userCredentials.Email = state.users.user.Email, userCredentials.Username = state.users.user.Username));
    const todos = useSelector(state => state.users.user.Todos);

    useEffect(() => {
        dispatch(fetchUsers({id: 1}));
    },[])

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}