import React, {BaseSyntheticEvent, useContext, useState} from "react";
import {Task} from "../../../models/Task";
import {TasksContext} from "../../../store/taskContext";
import Indicator from "./Indicator";
import ListItemHocComponent from "../../../hocs/ListItemHocComponent";
import {useNavigate} from "react-router-dom";
import {Card, CardActions, CardContent, Tooltip} from "@mui/material";
import {InputStyles} from "../../input/inputStyles";
// import {ReactComponent as BurgerIcon} from '../../assets/burger.svg'


export interface ListItemProps {
    task: Task
    onTitleClick: (taskId: number, taskTitle: string) => void
}
const ListItem:React.FC<ListItemProps> = props => {
    const {task,onTitleClick} = props
    const navigation = useNavigate()
    const {activeTaskId, setActiveTaskId, tasks, setTasks} = useContext(TasksContext)

    const [isMounted, setIsMounted] = useState<boolean>(false)

    const handleClickTask = () => {
        setActiveTaskId(task.id)
    }
    const handleChangeCompleteStatus = (e: BaseSyntheticEvent) => {
        setTasks(tasks.map(taskItem =>
            taskItem.id === task.id ?
                ({...taskItem, completed: e.target.checked}) :
                taskItem))
    }
    const handleDeleteItem = () => {
        setTasks(tasks.filter(taskItem => taskItem.id !== task.id))
    }

    const handleTitleClick = () => {
        onTitleClick(task.id, task.title)
    }
    const handleGoToTaskPage =() => {
        navigation(`${task.id}`)
    }

    // useEffect(() => {
    //     setIsMounted(true)
    //     console.log('mounting', task.id)
    //
    // }, []);
    //
    // useEffect(() => {
    //     if (!isMounted) return
    //     console.log('updating', task, tasks, activeTaskId, isMounted)
    // } );
    //
    // useEffect(() => {
    //     return () => {
    //         console.log('unmounting', task.id)
    //         setIsMounted(false)
    //     }
    // }, []);

    // useEffect(() => {
    //     if (isMounted) {
    //
    //         console.log('mounting', task.id)
    //     } else {
    //
    //         console.log('updating', task.id)
    //     }
    //
    //     return () => {
    //         console.log('unmounting', task.id)
    //     }
    // });



    return <Tooltip title={`status is ${activeTaskId === task.id ? 'active': 'not active'}`} placement="top">
        <Card onClick={handleClickTask} sx={InputStyles(activeTaskId === task.id)}>
        <CardContent onClick={handleTitleClick}>
            {task.id}. ${task.title}
            {/*<BurgerIcon/>*/}
        </CardContent>
        <CardActions>
                <Indicator isActive={activeTaskId === task.id}/>

            <input type={"checkbox"} checked={task.completed} onChange={handleChangeCompleteStatus} />
            <div onClick={handleDeleteItem}>del</div>
            <div onClick={handleGoToTaskPage} style={{width: 20, height: 20, background: '#00f'}}></div>
        </CardActions>

    </Card>
    </Tooltip>
}

export default ListItem
export const ListItemWithHoc = ListItemHocComponent(ListItem)
