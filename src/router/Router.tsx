import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import TodoPage from "./pages/todoPage";
import LoginPage from "./pages/loginPage";
import RouterRoutes from "./RouterRoutes";

enum routeLocationsEnum {
    todo= '/todo',
    login= '/login'
}

const routeLocations = [routeLocationsEnum.login,routeLocationsEnum.todo]

const Router:React.FC = () => {


    return <BrowserRouter>
       <RouterRoutes/>
    </BrowserRouter>
}

export default Router