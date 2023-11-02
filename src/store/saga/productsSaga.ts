import {getCategories, getProducts} from "../../api/services/storeServices/service";
import {call, put, takeEvery} from "redux-saga/effects";
import {setCategoriesToStore, setProductsToStore} from "../reducers/productsReducer/actions";
import {CategoryType, ProductType} from "../../models/Product";
import {ProductsReducerEnum} from "../reducers/productsReducer/actionsTypes";


export const getProductsSaga = () => ({type: ProductsReducerEnum.GET_PRODUCTS_SAGA})
export const getCategoriesSaga = () => ({type: ProductsReducerEnum.GET_CATEGORIES_SAGA})

function* getProductsWorker() {
    const products:ProductType[] = yield call(getProducts)

    const categories:CategoryType[] = yield call(getCategories)
    const newCategories =
        categories.map(category => ({...category, products: products.filter(product => product.category=== category.name)}))

    yield put(setProductsToStore(products))
    yield put(setCategoriesToStore(newCategories))
}
function* getCategoriesWorker() {
    const categories:CategoryType[] = yield call(getCategories)
    yield put(setCategoriesToStore(categories))
}


export function* productsWatcher() {
    yield takeEvery(ProductsReducerEnum.GET_PRODUCTS_SAGA, getProductsWorker)
    yield  takeEvery(ProductsReducerEnum.GET_CATEGORIES_SAGA, getCategoriesWorker)
}