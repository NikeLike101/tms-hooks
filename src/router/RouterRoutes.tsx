import {Route, Routes, useLocation, useParams} from "react-router-dom";
import TodoPage from "./pages/todoPage";
import LoginPage from "./pages/loginPage";
import React, {useEffect} from "react";
import NotFound404 from "./pages/NotFound404";
import useAuth from "../hooks/useAuth";
import TaskPage from "./pages/taskPage";

const RouterRoutes = () => {

    const {pathname}= useLocation()
    const params = useParams()
    const {isAuthorized} = useAuth()
    useEffect(() => {
        console.log(pathname, params)
    }, [pathname]);


    return  <Routes>
<Route path=''>
        {isAuthorized &&
           <> <Route path='todo' Component={TodoPage} />

               <Route path='todo/:id' Component={TaskPage}/>
           </>
        }

        <Route path='/login' Component={LoginPage} />
        <Route path='*' Component={NotFound404}/>

</Route>
    </Routes>
}

export default RouterRoutes