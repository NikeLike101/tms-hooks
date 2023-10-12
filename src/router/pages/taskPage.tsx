import {RouteProps, useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {TasksContext} from "../../store/taskContext";
import {Task} from "../../models/Task";




const TaskPage = () => {

    const location = useLocation()
    const navigation = useNavigate()
    const {tasks} = useContext(TasksContext)
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
    return <>task page
        <div onClick={handleGoBack}>go back</div>
        {task && <>
        <h1>{task.title}</h1>
            <input type={"checkbox"} checked={task.completed}/>

        </>}

    </>
}

export default TaskPage