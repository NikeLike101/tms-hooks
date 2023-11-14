import React, {useEffect, useState} from "react";
import {Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Tooltip} from "@mui/material";
import {useAppSelector} from "../../../store/store";
import {Delete, FolderOpen} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {
    setActivePost,
    setBlogPostsToStore,
    setCommentsModalStatus
} from "../../../store/reducers/blogUsersReducer/actions";
import {BlogPost} from "../../../models/User";


interface Props {

}

const PostsTable:React.FC<Props> = props => {
    const {} = props
    const {posts, selectedUserId, users, searchString} = useAppSelector(state => state.blogUsersReducer)
const dispatch = useDispatch()

    const [postsToShow, setPostsToShow] = useState<BlogPost[]>([]);

    useEffect(() => {
        setPostsToShow(posts
            .filter(post => post.title.toLowerCase().includes(searchString.toLowerCase()))
            .filter(post => selectedUserId === null || post.userId === selectedUserId))
    }, [posts, searchString, selectedUserId]);
    const handleDeletePost = (postId: number) => {
        dispatch(setBlogPostsToStore(posts.filter(post => post.id !== postId)))
    }

    const handleOpenCommentsModal = (post: BlogPost) => {
        dispatch(setActivePost(post))
        dispatch(setCommentsModalStatus(true))
    }

    return <Table>
        <TableHead>
            <TableRow sx={{background: '#ccc'}}>
                <TableCell>
                    title
                </TableCell>
                <TableCell>
                    body
                </TableCell>
                <TableCell>
                    userName
                </TableCell>
                <TableCell/>
                {selectedUserId !== null && <TableCell/>}
            </TableRow>
        </TableHead>
        <TableBody>
            {postsToShow.map(post => <TableRow sx={{border: selectedUserId === post.userId ? '#f00 solid 2px' : 'unset'}}>
                <TableCell>
                    <Tooltip title={post.title}><div>{post.title.slice(0,10)}</div></Tooltip>
                </TableCell>
                <TableCell sx={{textOverflow: 'ellipsis'}}>

                    <Tooltip title={post.body}><div>{post.body.slice(0,10)}</div></Tooltip>

                </TableCell>
                <TableCell>
                    {users.find(user => user.id === post.userId)?.name || 'not found'}
                </TableCell>
                <TableCell sx={{padding: '0px'}}>
                    <IconButton onClick={() => handleOpenCommentsModal(post)}>
                        <FolderOpen/>
                    </IconButton>
                </TableCell>
                {post.userId === selectedUserId && <TableCell sx={{padding: '0px'}}>
                    <IconButton onClick={() => handleDeletePost(post.id)}>
                        <Delete/>
                    </IconButton>
                </TableCell>}
            </TableRow>)}
        </TableBody>
    </Table>
}
export default PostsTable