import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PageContentWrapper from "../../components/page";

const NotFound404 = () => {
    const navigation = useNavigate()
    const {isAuthorized} = useAuth()
    const handleNavigateToLogin = () => {
        navigation(isAuthorized ? '/todo' : '/login')
    }

    return <PageContentWrapper>not found <button onClick={handleNavigateToLogin} >login</button></PageContentWrapper>
}

export default NotFound404