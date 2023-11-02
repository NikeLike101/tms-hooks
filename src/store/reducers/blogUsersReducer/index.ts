

import { Reducer} from "@reduxjs/toolkit";

import {BlogUsersReducerEnum} from "./actionsTypes";
import {BlogPost, BlogUser} from "../../../models/User";


type BlogUsersReducerType = {
    users: BlogUser[]
    selectedUserId: number | null
    posts: BlogPost[]
}

const defaultState:BlogUsersReducerType = {
    users: [],
    posts: [],
    selectedUserId: null
}


const blogUsersReducer: Reducer<BlogUsersReducerType> = (state = defaultState, action) => {
    switch (action.type) {
        case BlogUsersReducerEnum.SET_BLOG_USERS:
            return {...state, users: action.users}
        case BlogUsersReducerEnum.SET_BLOG_POSTS:
            return {...state, posts: action.posts}
        case BlogUsersReducerEnum.SET_SELECTED_BLOG_USER_ID:
            return {...state, selectedUserId: action.selectedUserId}
        default:
            return {...state}
    }
}

export default blogUsersReducer