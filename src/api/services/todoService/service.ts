import {Task} from "../../../models/Task";


export const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    return {text: data.title, id: data.id }
}