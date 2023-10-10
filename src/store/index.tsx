import React, {PropsWithChildren} from "react";
import {TaskContextProvider} from "./taskContext";
import {ThemeContextProvider} from "./themeContext";


const MainContext: React.FC<PropsWithChildren> = ({children}) => {

    return <ThemeContextProvider>
        <TaskContextProvider>
            {children}
        </TaskContextProvider>
    </ThemeContextProvider>
}

export default MainContext