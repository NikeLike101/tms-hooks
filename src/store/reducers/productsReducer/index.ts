import { Reducer} from "@reduxjs/toolkit";
import {CategoryType, ProductType} from "../../../models/Product";

import {ProductsReducerEnum} from "./actionsTypes";


type ProductsReducerType = {
    products: ProductType[]
    categories: CategoryType[]
}

const defaultState:ProductsReducerType = {
    products: [],
    categories: []
}


const productsReducer: Reducer<ProductsReducerType> = (state = defaultState, action) => {
    switch (action.type) {
        case ProductsReducerEnum.SET_PRODUCTS:
            return {...state,products: action.products}
        case ProductsReducerEnum.SET_CATEGORIES:
            return {...state, categories: action.categories}
        default:
            return {...state}
    }
}

export default productsReducer