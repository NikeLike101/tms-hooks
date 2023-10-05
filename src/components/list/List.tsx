import React from "react";
import {Task} from "../../models/Task";
import ListItem from "./item/ListItem";


interface Props {
    tasks: Task[]
}

const List: React.FC<Props> = props => {
    const {tasks} = props
    return <div style={{border: '3px solid #f00'}}>
        {!!tasks.length ?
            tasks.map(task => <ListItem task={task} key={task.id}/>) :
        'Tasks not founded:('
        }

    </div>
}

export default List