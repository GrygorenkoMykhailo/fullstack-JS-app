import UserNotFoundErrorComponent from "../errorComponents/UserNotFoundErrorComponent";
import InternalServerErrorComponent from "../errorComponents/InternalServerErrorComponent";
import { useRouteError } from "react-router-dom";

function ProfileErrorBoundary(){
    const error = useRouteError();

    console.log('error = ',error)
    
    if(error.status === 404){
        return <UserNotFoundErrorComponent/>
    }
    else if(error.status === 500){
        return <InternalServerErrorComponent/>
    }
}

export default ProfileErrorBoundary