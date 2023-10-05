import React, {useContext} from "react";
import {Task} from "../../../models/Task";
import {TasksContext} from "../../../store/context";


interface Props {
    task: Task
}
const ListItem:React.FC<Props> = props => {
    const {task} = props
    const {tasks, activeTaskId, setActiveTaskId} = useContext(TasksContext)


    const handleClickTask = () => {
        setActiveTaskId(task.id)
    }

    return <div onClick={handleClickTask} style={{border: `1px solid ${activeTaskId === task.id ? '#0f0' :'#00f'}`}}>
        {task.id < 10 ? `${task.id}. ${task.text}` : `${task.text} - ${task.id}`}
        tasks length {tasks.length}
    </div>
}

export default ListItem