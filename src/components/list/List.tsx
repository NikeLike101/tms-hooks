import React, {useContext, useEffect} from "react";
import {Task} from "../../models/Task";
import ListItem, {ListItemWithHoc} from "./item/ListItem";
import {TasksContext} from "../../store/taskContext";


interface Props {
}

const List: React.FC<Props> = props => {
    const {tasks} = useContext(TasksContext)


    const handleClickTaskText = (taskId: number, text: string) => {
        console.log(taskId, text)
    }

    return <div style={{border: '3px solid #f00'}}>
        {/*{!!tasks.length ?*/}
        {tasks.map(task => <ListItem onTitleClick={handleClickTaskText} task={task} key={task.id}/>)}
        {/*{tasks.map(task => <ListItemWithHoc onTitleClick={handleClickTaskText} task={task} key={task.id}/>)}*/}
        {/*:*/}
        {/*'Tasks not founded:('*/}
        {/*}*/}

    </div>
}

export default List