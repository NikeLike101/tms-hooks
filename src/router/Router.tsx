import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import TodoPage from "./pages/todoPage";
import SignInPage from "./pages/signInPage";
import RouterRoutes from "./RouterRoutes";

export enum routeLocationsEnum {
    todo= '/todo',
    main='/',
    signIn='/sign-in',
    signUp= '/sign-up',
    favoriteFilms='/favoriteFilms',
    filmPage='/films/:filmLabel',
    usersPage='/users'
}

const Router:React.FC = () => {


    return <BrowserRouter>
       <RouterRoutes/>
    </BrowserRouter>
}

export default Router