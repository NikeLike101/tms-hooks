import React from "react";
import PostsTable from "./postsTable";
import {Box} from "@mui/material";


interface Props {

}



const PostsTableWrapper: React.FC<Props> = props => {
    const {} = props
    return <Box sx={{display: 'flex', flexDirection:'column'}}>
    <Box sx={{height: '60px', width: '50%'}}></Box>
    <PostsTable/>
    </Box>
}

export default PostsTableWrapper