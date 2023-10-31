import React from "react";
import UsersTable from "./usersTable";
import {Box} from "@mui/material";


interface Props {

}



const UsersTableWrapper: React.FC<Props> = props => {
    const {} = props
    return <Box sx={{display: 'flex', flexDirection:'column',}}>
    <Box sx={{ height: '60px', width: '50%'}}></Box>
    <UsersTable/>
    </Box>
}

export default UsersTableWrapper