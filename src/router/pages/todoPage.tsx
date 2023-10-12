import React, {useContext, useEffect, useState} from "react";
import {Task} from "../../models/Task";
import Form from "../../components/form";
import List from "../../components/list";
import {TasksContext} from "../../store/taskContext";
import {ThemeContext, ThemeEnum} from "../../store/themeContext";
import ThemeButton from "../../components/themeButton";
import {PhotoType} from "../../models/photo";
import PhotoPicker from "../../components/photoPicker/PhotoPicker";
import {getPhoto} from "../../api/services/photosService/service";
import useAuth from "../../hooks/useAuth";


const TodoPage:React.FC = () => {

    const {tasks, setTasks} = useContext(TasksContext)
    const {theme} = useContext(ThemeContext)
    const {logout} = useAuth()

    const [currentPhoto, setCurrentPhoto] = useState<PhotoType | undefined>(undefined)
    const handleCreateNewTask = (newTask:Task) => {
        setTasks([...tasks, newTask])
    }
    const handleClickPhoto = async (photoId: number) => {
        const data =await getPhoto(photoId)
        setCurrentPhoto(data)
    }

    const handleLogout = () => {
        logout()
    }


    useEffect(() => {
        console.log('changed tasks' ,tasks)
    }, [tasks]);

    return <div style={{background: theme === ThemeEnum.light ?  '#fff' : '#000'}}>
        <ThemeButton/>
        <button onClick={handleLogout}>logout</button>
        {Array.from({length: 5}).map((photoPickerItem, index) =>
            <PhotoPicker onClick={handleClickPhoto} value={index+1} key={index}/>)}
        {currentPhoto && <img src={currentPhoto.url}/>}
        <Form onCreateTask={handleCreateNewTask}/>
        <List/>
    </div>
}

export default TodoPage