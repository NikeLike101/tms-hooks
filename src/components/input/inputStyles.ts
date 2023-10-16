import {SxProps} from "@mui/material";


export const InputStyles= (isActive: boolean): SxProps => ({
    border: `1px solid ${isActive ? '#0f0' :'#00f'}`,
    display: "flex",

})