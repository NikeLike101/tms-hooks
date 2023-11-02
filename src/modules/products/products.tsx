import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getProductsAndCategoriesToStore} from "../../store/reducers/productsReducer/actions";
import CategoryItem from "./categoryItem/CategoryItem";
import {Box} from "@mui/material";
import {getCategoriesSaga, getProductsSaga} from "../../store/saga/productsSaga";
import {useDispatch} from "react-redux";
import {getCategories} from "../../api/services/storeServices/service";


const Products:React.FC = () => {
    const {products,categories} = useAppSelector(state => state.productsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getProductsAndCategoriesToStore())
        dispatch(getProductsSaga())
    }, []);


    return <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        {categories.map(category => <CategoryItem key={category.name} category={category}/>)}
    </Box>
}

export default Products