import React, {useContext, useEffect, useRef, useState} from "react";
import {Task} from "../../models/Task";
import Form from "../../components/form";
import List from "../../components/list";
import {ThemeContext} from "../../store/themeContext";
import ThemeButton from "../../components/themeButton";
import {PhotoType} from "../../models/photo";
import PhotoPicker from "../../components/photoPicker/PhotoPicker";
import {getPhoto} from "../../api/services/photosService/service";
import useAuth from "../../hooks/useAuth";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import useThemeColors from "../../hooks/useThemeColors";
import PageContentWrapper from "../../components/page";
import Films from "../../components/films";
import {AppStateType, useAppDispatch, useAppSelector} from "../../store/store";
import {setTasks} from "../../store/reducers/taskReducer";


const TodoPage:React.FC = () => {

    const {tasks} = useAppSelector((state) => state.taskReducer)
    const {user} = useAppSelector((state) => state.userReducer)
    const dispatch = useAppDispatch()
    const {theme} = useContext(ThemeContext)
    const colors = useThemeColors()

    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [currentPhoto, setCurrentPhoto] = useState<PhotoType | undefined>(undefined)
    const videoRef = useRef<HTMLVideoElement>(null)
    const intervalRef = useRef<number>(null)
    const handleCreateNewTask = (newTask:Task) => {

        dispatch(setTasks([...tasks, newTask]))
    }
    const handleClickPhoto = async (photoId: number) => {
        const data =await getPhoto(photoId)
        setCurrentPhoto(data)
    }

    const handleClose = () => {
        setIsDialogOpen(false)
    }

    const handleOpen = () => {
        setIsDialogOpen(true)
    }

    const handleLogout = () => {

    }

    const handlePlayVideo = () => {
        if (videoRef.current === null) return
        videoRef.current.play()
    }

    const handleStopInterval = () => {
        if (intervalRef.current === null) return
        console.log(intervalRef.current)
        const intervalId = intervalRef.current
        clearInterval(intervalId)
    }


    useEffect(() => {
        console.log(intervalRef.current)
    }, [intervalRef.current]);


    const handleStartInterval  = () => {
        const intervalId = setInterval( () => {
            console.log('hello')
        }, 500)
        //@ts-ignore
        intervalRef.current = intervalId
    }

    useEffect(() => {
        console.log('changed tasks' ,tasks)
    }, [tasks]);

    return <PageContentWrapper>
        <ThemeButton/>
        {user !== null && <>Hi, there {user.login}, session from {new Date(user.sessionStartDate).toLocaleDateString()}</>}
        <button onClick={handleLogout}>logout</button>
        {Array.from({length: 5}).map((photoPickerItem, index) =>
            <PhotoPicker onClick={handleClickPhoto} value={index+1} key={index}/>)}
        {currentPhoto && <img src={currentPhoto.url}/>}
        <Form onCreateTask={handleCreateNewTask}/>
        <video controls style={{height: 100, width :150}} src={'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4'} ref={videoRef}>
        </video>
        <Box sx={{display: 'flex', gap: '10px'}}>
        <Button variant={"contained"} onClick={handlePlayVideo}>play</Button>
        <Button variant={"contained"} onClick={handleOpen}>open dialog</Button>
        <Button variant={"outlined"} onClick={handleStartInterval}>start interval</Button>
        {/*<button onClick={handleStartInterval}>start interval</button>*/}
        <Button variant={"outlined"} onClick={handleStopInterval}>stop interval</Button>
        </Box>
        {/*<button onClick={handleStopInterval}>stop interval</button>*/}
        <List/>
        <Films/>

        <Dialog open={isDialogOpen} PaperProps={{ sx: {height: '200px'}}} >
            <DialogTitle>Title</DialogTitle>
            <DialogContent>
                asdsaasd sad adasd asd asda sd asdas dsad sasd asda sdas dsa das
                <Films/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Back</Button>
                <Button variant={"contained"} onClick={handleClose}>Done</Button>

            </DialogActions>
        </Dialog>
    </PageContentWrapper>
}

export default TodoPage