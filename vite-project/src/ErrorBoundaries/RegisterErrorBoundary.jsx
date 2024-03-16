import { useRouteError } from "react-router-dom"
import InternalServerErrorComponent from "../errorComponents/InternalServerErrorComponent"

function RegisterErrorBoundary(){
    return <InternalServerErrorComponent/>
}

export default RegisterErrorBoundary