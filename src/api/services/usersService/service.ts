import {BlogPost, BlogUser} from "../../../models/User";


export const getUsers = async (): Promise<BlogUser[]> => {
    const rawData = await fetch('https://jsonplaceholder.typicode.com/users')

    return await rawData.json()
}
export const getPosts = async (): Promise<BlogPost[]> => {
    const rawData = await fetch('https://jsonplaceholder.typicode.com/posts')

    return await rawData.json()
}