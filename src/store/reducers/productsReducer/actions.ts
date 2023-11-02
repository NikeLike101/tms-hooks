import {ProductsReducerEnum} from "./actionsTypes";
import {CategoryType, ProductType} from "../../../models/Product";
import {AnyAction, Dispatch} from "@reduxjs/toolkit";
import {getCategories, getProducts} from "../../../api/services/storeServices/service";

export const getProductsAndCategoriesToStore = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const [dataProducts, dataCategories] = await Promise.all([getProducts(), getCategories()])
        const fulfilledDataCategories =
            dataCategories.map(category => ({...category, products: dataProducts.filter(product => product.category=== category.name)}))
        dispatch(setProductsToStore(dataProducts))
        dispatch(setCategoriesToStore(fulfilledDataCategories))
    }
}

 export   const setProductsToStore = (products:ProductType[]) => ({
    type: ProductsReducerEnum.SET_PRODUCTS,
    products
})
export const setCategoriesToStore = (categories: CategoryType[]) => ({
    type: ProductsReducerEnum.SET_CATEGORIES,
    categories
})