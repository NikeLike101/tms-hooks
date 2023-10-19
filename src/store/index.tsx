import React, {PropsWithChildren} from "react";
// import {TaskContextProvider} from "./taskContext";
import {ThemeContextProvider} from "./themeContext";
import {Provider} from "react-redux";
import {store} from "./store";


const MainContext: React.FC<PropsWithChildren> = ({children}) => {

    return <ThemeContextProvider>
        <Provider store={store}>
        {/*<TaskContextProvider>*/}
            {children}
        {/*</TaskContextProvider>*/}
        </Provider>
    </ThemeContextProvider>
}

export default MainContext