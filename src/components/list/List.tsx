import React from "react";
import ListItem from "./item/ListItem";
import {useAppSelector} from "../../store/store";


interface Props {
}

const List: React.FC<Props> = props => {
    const {tasks} = useAppSelector(state => state)


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