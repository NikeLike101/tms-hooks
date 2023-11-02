import React from "react";
import {IconButton, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useAppSelector} from "../../../store/store";
import {Delete} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {setBlogPostsToStore} from "../../../store/reducers/blogUsersReducer/actions";


interface Props {

}

const PostsTable:React.FC<Props> = props => {
    const {} = props
    const {posts, selectedUserId, users} = useAppSelector(state => state.blogUsersReducer)
const dispatch = useDispatch()

    const handleDeletePost = (postId: number) => {
        dispatch(setBlogPostsToStore(posts.filter(post => post.id !== postId)))
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

                {selectedUserId !== null && <TableCell/>}
            </TableRow>
        </TableHead>
        <TableBody>
            {posts.filter(post => selectedUserId === null || post.userId === selectedUserId).map(post => <TableRow sx={{border: selectedUserId === post.userId ? '#f00 solid 2px' : 'unset'}}>
                <TableCell>
                    {post.title.slice(0,10)}
                </TableCell>
                <TableCell sx={{textOverflow: 'ellipsis'}}>
                    {post.body.slice(0,10)}
                </TableCell>
                <TableCell>
                    {users.find(user => user.id === post.userId)?.name || 'not found'}
                </TableCell>
                {post.userId === selectedUserId && <TableCell>
                    <IconButton onClick={() => handleDeletePost(post.id)}>
                        <Delete/>
                    </IconButton>
                </TableCell>}
            </TableRow>)}
        </TableBody>
    </Table>
}
export default PostsTable