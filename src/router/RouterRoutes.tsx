import {Route, Routes, useLocation, useParams} from "react-router-dom";
import TodoPage from "./pages/todoPage";
import SignInPage from "./pages/signInPage";
import React, {useEffect} from "react";
import useAuth from "../hooks/useAuth";
import TaskPage from "./pages/taskPage";
import {routeLocationsEnum} from "./Router";
import MainPage from "./pages/mainPage";
import NotFound404 from "./pages/notFound404";
import SignUpPage from "./pages/signUpPage";
import {useAppSelector} from "../store/store";

const RouterRoutes = () => {

    const {pathname}= useLocation()
    const params = useParams()
    const {user} = useAppSelector(state => state.userReducer)
    useEffect(() => {
        console.log(pathname, params)
    }, [pathname]);


    return  <Routes>
<Route path=''>
        {user !== null &&
           <> <Route path='todo' Component={TodoPage} />

               <Route path='todo/:id' Component={TaskPage}/>
           </>
        }

        <Route path={routeLocationsEnum.main} Component={MainPage} />
        <Route path={routeLocationsEnum.signIn} Component={SignInPage} />
        <Route path={routeLocationsEnum.signUp} Component={SignUpPage} />
        <Route path='*' Component={NotFound404}/>

</Route>
    </Routes>
}

export default RouterRoutes