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
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack} from "@mui/material";
import useThemeColors from "../../hooks/useThemeColors";
import PageContentWrapper from "../../components/page";
import Films from "../../modules/films";
import {AppStateType, useAppDispatch, useAppSelector} from "../../store/store";
import {setTasks} from "../../store/reducers/taskReducer";
import {getInitialValue} from "../../store/reducers/userReducer/actions";


const TodoPage:React.FC = () => {

    const {tasks} = useAppSelector((state) => state.taskReducer)
    const {user} = useAppSelector((state) => state.userReducer)
    const dispatch = useAppDispatch()
    const {theme} = useContext(ThemeContext)
    // const {tasks : tasksFromContext} = useContext(TasksContext)
    const colors = useThemeColors()
    // useEffect(() => {
    //     console.log(tasksFromContext, 'fromCOntext')
    // }, [tasksFromContext]);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [currentPhoto, setCurrentPhoto] = useState<PhotoType | undefined>(undefined)
    const [defState, setDefState] = useState<{id: number, name: string}>({id: -1, name: 'helloImState'});
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        dispatch(getInitialValue())

    }, []);

    useEffect(() => {
        console.log(intervalRef.current)
    }, [intervalRef.current]);

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

    const showState = () => {
        console.log(defState, 'defState!!')
    }
    const handleChangeState  = () => {
        console.log(defState)
        setDefState({id: 1, name: 'qwerty!!!'})


        setTimeout(() => {
            showState()
            }, 500)
    }

    const handleChangeStateAlt = () => {
        console.log(defState)
        defState.name = 'qwer1231'

    }

    // useEffect(() => {
    //     console.log(defState)
    // }, [defState]);
    //
    // useEffect(() => {
    //     console.log(defState)
    // }, [defState.name]);



    const handleStartInterval  = () => {
        const intervalId = setInterval( () => {
            console.log('hello')
        }, 500)
        intervalRef.current = intervalId
    }


    return <PageContentWrapper>
        <ThemeButton/>


        <Button onClick={handleChangeState}>Click me</Button>
        <Button onClick={handleChangeStateAlt}>Click me2</Button>
        {JSON.stringify(defState)}
        {user !== null && <>Hi, there {user.login}, session from {new Date(user.sessionStartDate).toLocaleTimeString()}</>}
        <button onClick={handleLogout}>logout</button>
        {Array.from({length: 5}).map((photoPickerItem, index) =>
            <PhotoPicker onClick={handleClickPhoto} value={index+1} key={index}/>)}
        {currentPhoto && <img src={currentPhoto.url}/>}

        {/*<TaskContextProvider>*/}
        <Form onCreateTask={handleCreateNewTask}/>
        {/*</TaskContextProvider>*/}
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
        <Stack>
            {}
        </Stack>
        <Films/>

        <Dialog open={isDialogOpen} PaperProps={{ sx: {height: '200px'}}} >
            <DialogTitle>Title</DialogTitle>
            <DialogContent>
                asdsaasd sad adasd asd asda sd asdas dsad sasd asda sdas dsa das
                {/*<Films/>*/}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Back</Button>
                <Button variant={"contained"} onClick={handleClose}>Done</Button>

            </DialogActions>
        </Dialog>
    </PageContentWrapper>
}

export default TodoPage