import React, {BaseSyntheticEvent, useEffect, useState} from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Modal,
    Paper,
    Stack,
    TextField
} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {useDispatch} from "react-redux";
import {getCommentToStore, setCommentsModalStatus} from "../../../store/reducers/blogUsersReducer/actions";
import {createComment, getComments} from "../../../api/services/usersService/service";


const CommentsModal:React.FC = () => {
    const {commentsModalStatus, activePost, comments} = useAppSelector(state => state.blogUsersReducer)
    const dispatch = useAppDispatch()
    const [commentTitleValue, setCommentTitleValue] = useState<string>('');
    const [commentBodyValue, setCommentBodyValue] = useState<string>('');
    const [commentAuthorValue, setCommentAuthorValue] = useState<string>('');


    useEffect(() => {
        if (!commentsModalStatus || activePost === null) return

        dispatch(getCommentToStore(activePost.id))
    }, [commentsModalStatus]);
    const handleCloseModal = () => {
        dispatch(setCommentsModalStatus(false))
    }

    const handleChangeCommentTitle = (e: BaseSyntheticEvent) => {
        setCommentTitleValue(e.target.value)
    }
    const handleChangeCommentBody = (e: BaseSyntheticEvent) => {
        setCommentBodyValue(e.target.value)
    }
    const handleChangeCommentAuthor = (e: BaseSyntheticEvent) => {
        setCommentAuthorValue(e.target.value)
    }
    const handleCreateNewComment = async () => {
        if (activePost === null) return
        const data = createComment({email: commentAuthorValue, name: commentTitleValue, body: commentBodyValue, postId: activePost.id})
        console.log(data)
    }

    return <Dialog open={commentsModalStatus} onClose={(e, reason) => reason === 'backdropClick' && handleCloseModal}>
        <DialogTitle>Comments to post {activePost && activePost.title}</DialogTitle>
        <DialogContent>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px', borderBottom: '3px solid #000'}}>
                <TextField value={commentTitleValue} onChange={handleChangeCommentTitle} />
                <TextField value={commentBodyValue} onChange={handleChangeCommentBody} />
                <TextField value={commentAuthorValue} onChange={handleChangeCommentAuthor}/>
                <Button onClick={handleCreateNewComment}>apply</Button>
            </Box>
            <Stack sx={{gap: '10px'}}>
            {comments.map(comment => <Paper>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <Box>{comment.name}
                        {comment.email}
                    </Box>
                    {comment.body}
                </Box>
            </Paper>)}
            </Stack>
        </DialogContent>
        <DialogActions>
            <Button>Close</Button>
        </DialogActions>
    </Dialog>
}

export default CommentsModal