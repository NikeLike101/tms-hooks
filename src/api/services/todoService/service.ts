import {Task} from "../../../models/Task";


export const getTodos = async ():Promise<Task[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json()
    return data.map( (dataItem:Task) => ({title: dataItem.title, id: dataItem.id, completed: dataItem.completed }))
}