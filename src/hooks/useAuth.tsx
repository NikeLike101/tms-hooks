import {useId} from "react";
import {useNavigate} from "react-router-dom";


type AuthUserInfo = {
    login: string
    password: string
}

const useAuth = () => {


    const navigation = useNavigate()
    const authUsers:AuthUserInfo[] = JSON.parse(localStorage.getItem('authInfo') || '[]')




    const login = (data: AuthUserInfo) => {
        const newAuthUsers = authUsers
        const foundUserFromStorage = newAuthUsers.find(user => user.login === data.login)
        if (foundUserFromStorage) {
            console.log(foundUserFromStorage, 'user')
            if (data.password === foundUserFromStorage.password){
                localStorage.setItem('activeUser', `${data.login}`)
                return {error: undefined}
            } else {
                return {error: 'password is not correct'}
            }
        }
        console.log(data, 'data', authUsers)
        localStorage.setItem('authInfo', JSON.stringify([...newAuthUsers, data]))
        localStorage.setItem('activeUser', `${data.login}`)
        return {error: undefined}
    }

    const logout = () => {
        localStorage.removeItem('activeUser')
        navigation('/login')
    }

    const isAuthorized = !!localStorage.getItem('activeUser')

    const getActiveUser = () => localStorage.getItem('activeUser')
    return { isAuthorized, login, logout, getActiveUser}
}

export default useAuth