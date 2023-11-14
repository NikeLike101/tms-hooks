

import { Reducer} from "@reduxjs/toolkit";

import {BlogUsersReducerEnum} from "./actionsTypes";
import {BlogPost, BlogUser, PostComment} from "../../../models/User";


type BlogUsersReducerType = {
    users: BlogUser[]
    selectedUserId: number | null
    posts: BlogPost[]
    commentsModalStatus: boolean
    isLoading: boolean
    searchString: string
    comments: PostComment[]
    activePost: BlogPost | null
}

const defaultState:BlogUsersReducerType = {
    users: [],
    posts: [],
    selectedUserId: null,
    commentsModalStatus: false,
    isLoading: false,
    searchString: '',
    comments: [],
    activePost: null
}


const blogUsersReducer: Reducer<BlogUsersReducerType> = (state = defaultState, action) => {

    switch (action.type) {
        case BlogUsersReducerEnum.SET_BLOG_USERS:
            return {...state, users: action.users}
        case BlogUsersReducerEnum.SET_BLOG_POSTS:
            return {...state, posts: action.posts}
        case BlogUsersReducerEnum.SET_SELECTED_BLOG_USER_ID:
            return {...state, selectedUserId: action.selectedUserId}
        case BlogUsersReducerEnum.SET_COMMENTS_MODAL_STATUS:
            return  {...state, commentsModalStatus: action.newStatus}
        case BlogUsersReducerEnum.SET_IS_LOADING_STATUS:
            return  {...state, isLoading: action.newStatus}
        case BlogUsersReducerEnum.SET_SEARCH_STRING:
            return  {...state, searchString: action.newSearchString}
        case BlogUsersReducerEnum.SET_COMMENTS:
            return  {...state, comments: action.comments}
        case BlogUsersReducerEnum.SET_ACTIVE_POST:
            return  {...state, activePost: action.activePost}
        default:
            return {...state}
    }
}

export default blogUsersReducer