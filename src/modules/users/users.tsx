import { Box } from "@mui/material";
import React, {useEffect} from "react";
import UsersTableWrapper from "./usersTable";
import {useDispatch} from "react-redux";
import {getPosts, getUsers} from "../../api/services/usersService/service";
import {setBlogPostsToStore, setBlogUsersToStore} from "../../store/reducers/blogUsersReducer";
import PostsTableWrapper from "./postsTable";

const Users:React.FC = () => {
    const dispatch= useDispatch()


    useEffect(() => {
       const getData = async () => {
           const [dataUsers, dataPosts] =await Promise.all([getUsers(), getPosts()])

           dispatch(setBlogUsersToStore(dataUsers))
           dispatch(setBlogPostsToStore(dataPosts))
       }
       getData()
    }, []);



    return <Box sx={{display: 'flex',width: '100%', gap: '10px', }}>
    <UsersTableWrapper/>
        <PostsTableWrapper/>


    </Box>
}
export default Users