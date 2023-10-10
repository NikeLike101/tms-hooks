import React, {BaseSyntheticEvent, useContext, useEffect} from "react";
import {Task} from "../../../models/Task";
import {TasksContext} from "../../../store/taskContext";
import Indicator from "./Indicator";


interface Props {
    task: Task
}
const ListItem:React.FC<Props> = props => {
    const {task} = props
    const {activeTaskId, setActiveTaskId, tasks, setTasks} = useContext(TasksContext)


    const handleClickTask = () => {
        setActiveTaskId(task.id)
    }
    const handleChangeCompleteStatus = (e: BaseSyntheticEvent) => {
        setTasks(tasks.map(taskItem =>
            taskItem.id === task.id ?
                ({...taskItem, completed: e.target.checked}) :
                taskItem))
    }





    return <div onClick={handleClickTask} style={{
        border: `1px solid ${activeTaskId === task.id ? '#0f0' :'#00f'}`,
        display: "flex"}}>

        {task.id}. ${task.title}

        <Indicator isActive={activeTaskId === task.id}/>
        <input type={"checkbox"} checked={task.completed} onChange={handleChangeCompleteStatus} />
    </div>
}

export default ListItem