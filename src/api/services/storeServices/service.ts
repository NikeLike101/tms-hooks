import {CategoryFromResponseType, CategoryType, ProductType} from "../../../models/Product";


export const getProducts = async ():Promise<ProductType[]> => {
    const raw = await fetch('https://fakestoreapi.com/products')
    return await raw.json()
}


export const getCategories = async ():Promise<CategoryType[]> => {
        const raw = await fetch('https://fakestoreapi.com/products/categories')

    const data:CategoryFromResponseType[] = await raw.json()
    return data.map(category => ({name: category, products: []}))
}
