import {Box} from "@mui/material";
import React, {useEffect} from "react";
import UsersTableWrapper from "./usersTable";
import {useDispatch} from "react-redux";
import {getPosts, getUsers} from "../../api/services/usersService/service";
import PostsTableWrapper from "./postsTable";
import {
    getBlogUsersAndPostsToStore,
    setBlogPostsToStore,
    setBlogUsersToStore
} from "../../store/reducers/blogUsersReducer/actions";
import {useAppDispatch} from "../../store/store";


const Users: React.FC = () => {
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getBlogUsersAndPostsToStore())
    }, []);


    return <Box sx={{display: 'flex', width: '100%', gap: '10px',}}>
        <UsersTableWrapper/>
        <PostsTableWrapper/>


    </Box>
}
export default Users