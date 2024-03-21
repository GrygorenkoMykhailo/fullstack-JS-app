import { Route,Routes } from "react-router-dom"
import Layout from "./Components/Layout"
import TodoList from "./Components/TodoList"


function App(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<TodoList/>}/>
            </Route>
        </Routes>
        </>
    )
}

export default App