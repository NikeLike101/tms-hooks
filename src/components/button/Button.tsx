import {Button as MuiButton, ButtonTypeMap, ExtendButtonBase} from '@mui/material'
import {ButtonProps} from "@mui/material/Button/Button";
import useThemeColors from "../../hooks/useThemeColors";
import React from "react";

interface Props extends ButtonProps {

}

const Button:React.FC<Props> = props => {
    const {buttonBg} = useThemeColors()



    return <MuiButton sx={{background: buttonBg}} {...props}/>
}
export default Button