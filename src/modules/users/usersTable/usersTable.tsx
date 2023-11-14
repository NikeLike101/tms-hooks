import React, {BaseSyntheticEvent, useEffect, useState} from "react";
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {useAppSelector} from "../../../store/store";
import {Delete, Edit, Square} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {
    setBlogPostsToStore,
    setBlogUsersToStore,
    setSelectedBlogUserToStore
} from "../../../store/reducers/blogUsersReducer/actions";
import Button from "../../../components/button";
import {BlogUser} from "../../../models/User";


interface Props {

}

const UsersTable:React.FC<Props> = props => {
    const {} = props

    const dispatch = useDispatch()
    const {users, selectedUserId, posts, searchString} = useAppSelector(state => state.blogUsersReducer)
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [newUserName, setNewUserName] = useState<string>('');
    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [usersToShow, setUsersToShow] = useState<BlogUser[]>([]);

    useEffect(() => {
        setUsersToShow(users
            .filter(user => user.name.toLowerCase().includes(searchString.toLowerCase())))
    }, [users, searchString]);
    const handleHighlightPosts = (userId: number) => {
        dispatch(setSelectedBlogUserToStore(userId === selectedUserId ? null : userId))
    }

    const handleOpenEditDialog = (userId: number) => {
            setIsEdit(true)
        setEditingUserId(userId)
            setNewUserName(users.find(user => user.id === userId)?.name || '')
    }

    const handleChangeNewUserName = (e: BaseSyntheticEvent) => {
        setNewUserName(e.target.value)
    }
    const handleDoneChangingUserName = () => {
        const newUsers:BlogUser[] = structuredClone(users)

        dispatch(setBlogUsersToStore(newUsers.map(user=> user.id === editingUserId ? ({...user, name: newUserName}) : user)))
        setIsEdit(false)
    }

    const handleDeleteUser = (userId: number) => {

        const newUsers:BlogUser[] = structuredClone(users)

        dispatch(setBlogUsersToStore(newUsers.filter(user=> user.id !== userId)))
        dispatch(setBlogPostsToStore(posts.filter(post => post.userId !== userId)))
        if (selectedUserId === userId) {
            dispatch(setSelectedBlogUserToStore(null))
        }
    }

    return <><Table>
        <TableHead>
            <TableRow sx={{background: '#ccc'}}>
                <TableCell>
                    name
                </TableCell>
                <TableCell>
                    company name
                </TableCell>
                <TableCell>
                    website
                </TableCell>
                <TableCell/>
            </TableRow>
        </TableHead>
        <TableBody>
            {usersToShow.map(user => <TableRow>
                <TableCell>
                    {user.name}
                </TableCell>
                <TableCell>
                    {user.company.name}
                </TableCell>
                <TableCell>
                    {user.website}
                </TableCell>
                <TableCell>
                    <Box sx={{display: 'flex'}}>
                        <IconButton onClick={() => handleHighlightPosts(user.id)}>
                            <Square/>
                        </IconButton>
                        <IconButton onClick={() => handleOpenEditDialog(user.id)}>
                            <Edit/>
                        </IconButton>
                        <IconButton onClick={() => handleDeleteUser(user.id)}>
                            <Delete/>
                        </IconButton>
                    </Box>
                </TableCell>
            </TableRow>)}
        </TableBody>
    </Table>
        <Dialog open={isEdit}>
            <DialogTitle>Rename user</DialogTitle>
            <DialogContent>
                <TextField value={newUserName} onChange={handleChangeNewUserName}/>
            </DialogContent>

            <DialogActions>
                <Button variant={"text"} onClick={() => setIsEdit(false)}>Cancel</Button>
                <Button variant={"contained"} onClick={handleDoneChangingUserName}>Done</Button>
            </DialogActions>
        </Dialog>
        </>
}
export default UsersTable