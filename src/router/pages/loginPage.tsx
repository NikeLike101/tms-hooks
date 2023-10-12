import {BaseSyntheticEvent, useState} from "react";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
    const {login} = useAuth()
    const navigation = useNavigate()
    const [loginValue, setLoginValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [loginError, setLoginError] = useState<string | undefined>(undefined);

    const handlePasswordValueChange = (e: BaseSyntheticEvent) => {
        setPasswordValue(e.target.value)
    }
    const handleLoginValueChange = (e:BaseSyntheticEvent) => {
        setLoginValue(e.target.value)
    }

    const handleLogin = () => {
        const responseFromLogin = login({login: loginValue, password: passwordValue})
        if (responseFromLogin.error === undefined) {
            navigation('/todo')
            return
        }
        setLoginError(responseFromLogin.error)
    }

    return <>
    <input value={loginValue} onChange={handleLoginValueChange}/>
    <input value={passwordValue} onChange={handlePasswordValueChange}/>
        {loginError && <div style={{color: '#f00'}}>{loginError}</div>}
        <button onClick={handleLogin}>login</button>
    </>
}

export default LoginPage