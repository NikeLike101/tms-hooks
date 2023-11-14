import {BlogPost, BlogUser, PostComment} from "../../../models/User";


type CommentDataType = {
    name: string
    email: string
    body: string
    postId: number
}

export const getUsers = async (): Promise<BlogUser[]> => {
    const rawData = await fetch('https://jsonplaceholder.typicode.com/users')

    return await rawData.json()
}
export const getPosts = async (): Promise<BlogPost[]> => {
    const rawData = await fetch('https://jsonplaceholder.typicode.com/posts')

    return await rawData.json()
}

export const getComments = async ():Promise<PostComment[]> => {
    const rawData = await  fetch('https://jsonplaceholder.typicode.com/comments')
    return await rawData.json()
}
export const getCommentsByPostId = async (postId: number):Promise<PostComment[]> => {
    const rawData = await  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    return await rawData.json()
}

export const createComment = async (commentData: CommentDataType)=> {
    const rawData = await  fetch(`https://jsonplaceholder.typicode.com/comments`, {method: 'POST', body: JSON.stringify(commentData)})
    return await rawData.json()
}