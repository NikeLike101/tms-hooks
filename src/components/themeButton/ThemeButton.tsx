import React, {useContext} from "react";
import {ThemeContext, ThemeEnum} from "../../store/themeContext";


 const ThemeButton:React.FC = () => {
    const {setTheme,theme} = useContext(ThemeContext)

    const handleChangeTheme = () => {
        setTheme(prevState =>
            prevState === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light)
    }

    return <div onClick={handleChangeTheme} style={{
        width: 50,
        height: 50,
        background: theme === ThemeEnum.light ? '#000': '#fff'}}>

    </div>
}

export default ThemeButton