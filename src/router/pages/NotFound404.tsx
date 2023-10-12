import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NotFound404 = () => {
    const navigation = useNavigate()
    const {isAuthorized} = useAuth()
    const handleNavigateToLogin = () => {
        navigation(isAuthorized ? '/todo' : '/login')
    }

    return <>not found <button onClick={handleNavigateToLogin} >login</button></>
}

export default NotFound404