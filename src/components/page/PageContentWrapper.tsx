import React, {FC, PropsWithChildren} from 'react'
import {Box} from "@mui/material";
import useThemeColors from "../../hooks/useThemeColors";

interface Props extends PropsWithChildren{
}

const PageContentWrapper: FC<Props> = props => {
    const {children} = props
    const {backgroundColor,cardText}=  useThemeColors()

    return <Box sx={{minHeight: '100vh', background: backgroundColor, color: cardText,  padding: '10px'}}>
        {children}

    </Box>
}

export default PageContentWrapper