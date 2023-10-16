import {useContext} from "react";
import {ThemeContext, ThemeEnum} from "../store/themeContext";
import {colors} from "../styles/colors";


const useThemeColors = () => {
    const {theme} = useContext(ThemeContext)


    return colors[theme]
}

export default useThemeColors