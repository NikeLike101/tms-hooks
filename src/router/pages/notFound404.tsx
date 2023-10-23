import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PageContentWrapper from "../../components/page";
import {useAppSelector} from "../../store/store";

const NotFound404 = () => {
    const navigation = useNavigate()
    const user = useAppSelector(state => state.userReducer.user)
    const handleNavigateToLogin = () => {
        navigation(user !== null ? '/todo' : '/login')
    }

    return <PageContentWrapper>not found <button onClick={handleNavigateToLogin} >login</button></PageContentWrapper>
}

export default NotFound404