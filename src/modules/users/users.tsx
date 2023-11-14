import {Box, CircularProgress, Modal, TextField} from "@mui/material";
import React, {BaseSyntheticEvent, useEffect, useState} from "react";
import UsersTableWrapper from "./usersTable";
import {useDispatch} from "react-redux";
import {getPosts, getUsers} from "../../api/services/usersService/service";
import PostsTableWrapper from "./postsTable";
import {
    getBlogUsersAndPostsToStore,
    setBlogPostsToStore,
    setBlogUsersToStore, setSearchStringToStore
} from "../../store/reducers/blogUsersReducer/actions";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {useDebounce} from "../../hooks/useDebounce";
import CommentsModal from "./CommentsModal";


const Users: React.FC = () => {

    const {isLoading, commentsModalStatus} = useAppSelector(state => state.blogUsersReducer)
    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedValue = useDebounce(searchValue)

    const handleChangeSearchValue = (e: BaseSyntheticEvent) => {
        setSearchValue(e.target.value)
        console.log('change')
    }

    useEffect(() => {
        dispatch(getBlogUsersAndPostsToStore())
    }, []);


    useEffect(() => {
        console.log(debouncedValue, 'debs')
        dispatch(setSearchStringToStore(debouncedValue))
    }, [debouncedValue]);
    return <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: '10px',}}>
        <TextField value={searchValue} onChange={handleChangeSearchValue} sx={{width: '300px'}}/>

        <Box sx={{display: 'flex', width: '100%', gap: '10px',}}>
            <UsersTableWrapper/>
        <PostsTableWrapper/>
        </Box>
        <CommentsModal/>
        {isLoading && <Box sx={{ background: '#00000040', position: 'fixed', width: '100%', height: '100vh', top: 0, left: 0, }}>
            <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <CircularProgress />
            </Box>
        </Box>}
    </Box>
}
export default Users