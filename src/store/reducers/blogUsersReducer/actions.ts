import {BlogUsersReducerEnum} from "./actionsTypes";
import {BlogPost, BlogUser} from "../../../models/User";
import {getPosts, getUsers} from "../../../api/services/usersService/service";
import {AnyAction, Dispatch} from "@reduxjs/toolkit";


export const getBlogUsersAndPostsToStore = () => {

    return async (dispatch: Dispatch<AnyAction>) => {
        const [dataUsers, dataPosts] = await Promise.all([getUsers(), getPosts()])
        dispatch(setBlogUsersToStore(dataUsers))
        dispatch(setBlogPostsToStore(dataPosts))
    }
}


export const setBlogUsersToStore= (users: BlogUser[]) => {
    return {

        type: BlogUsersReducerEnum.SET_BLOG_USERS,
        users
    }
}
export const setSelectedBlogUserToStore= (selectedUserId: number | null) =>{
    return {

        type: BlogUsersReducerEnum.SET_SELECTED_BLOG_USER_ID,
        selectedUserId
    }
}
export const setBlogPostsToStore= (posts: BlogPost[]) => {
    return {
        type: BlogUsersReducerEnum.SET_BLOG_POSTS,
        posts
    }
}