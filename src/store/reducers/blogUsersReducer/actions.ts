import {BlogUsersReducerEnum} from "./actionsTypes";
import {BlogPost, BlogUser, PostComment} from "../../../models/User";
import {getComments, getCommentsByPostId, getPosts, getUsers} from "../../../api/services/usersService/service";
import {AnyAction, Dispatch} from "@reduxjs/toolkit";


export const getBlogUsersAndPostsToStore = () => {

    return async (dispatch: Dispatch<AnyAction>) => {
        dispatch(setIsLoadingStatus(true))
        const [dataUsers, dataPosts] = await Promise.all([getUsers(), getPosts()])
        dispatch(setBlogUsersToStore(dataUsers))
        dispatch(setBlogPostsToStore(dataPosts))

        dispatch(setIsLoadingStatus(false))
    }
}


export const getCommentToStore = (postId: number) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const comments = await getCommentsByPostId(postId)
        dispatch(setCommentsToStore(comments))
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

export const setCommentsModalStatus = (newStatus: boolean) => {
    return {
        type: BlogUsersReducerEnum.SET_COMMENTS_MODAL_STATUS,
        newStatus
    }
}

export const setCommentsToStore = (comments: PostComment[]) =>{
    return {
        type: BlogUsersReducerEnum.SET_COMMENTS,
        comments
    }
}

export const setActivePost = (activePost: BlogPost | null) =>{
    return {
        type: BlogUsersReducerEnum.SET_ACTIVE_POST,
        activePost
    }
}
export const setIsLoadingStatus = (newStatus: boolean) => {
    return {
        type: BlogUsersReducerEnum.SET_IS_LOADING_STATUS,
        newStatus
    }
}
export const setSearchStringToStore = (newSearchString: string) => {
    return {
        type: BlogUsersReducerEnum.SET_SEARCH_STRING,
        newSearchString
    }
}