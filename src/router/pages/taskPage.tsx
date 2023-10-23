import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Task} from "../../models/Task";
import PageContentWrapper from "../../components/page";
import {AppStateType, useAppSelector} from "../../store/store";
import {useSelector} from "react-redux";
import store from "../../store";


const TaskPage = () => {

    const location = useLocation()
    const navigation = useNavigate()
    const {tasks} = useAppSelector((state) => state.taskReducer)
    const [task, setTask] = useState<Task | undefined>(undefined);
    useEffect(() => {
            // setTask()
        console.log(location, location.pathname, location.pathname.split('/'), location.pathname.split('/')[location.pathname.split('/').length-1])
        const taskId = Number(location.pathname.split('/')[location.pathname.split('/').length-1])

        setTask(tasks.find(taskItem => taskItem.id == taskId))
    }, [location]);
    console.log(location)
    const handleGoBack = () => {
        navigation('todo')
    }
    return <PageContentWrapper>task page
        <div onClick={handleGoBack}>go back</div>
        {task && <>
        <h1>{task.title}</h1>
            <input type={"checkbox"} checked={task.completed}/>

        </>}

    </PageContentWrapper>
}

export default TaskPage