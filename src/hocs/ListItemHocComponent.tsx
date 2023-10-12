import React from "react";
import {ListItemProps} from "../components/list/item/ListItem";



const ListItemHocComponent = (Component: React.FC<ListItemProps>):React.FC<ListItemProps> => (props) => {

    const { onTitleClick, ...restProps} = props

    const handleTitleClick = (taskId: number, taskTitle: string) => {
        // onTitleClick(1, '2')
    }


    return <Component onTitleClick={handleTitleClick} {...restProps} />
}




export default ListItemHocComponent