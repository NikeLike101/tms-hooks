import React, {FC, useState} from 'react'
import {CategoryType} from "../../../models/Product";
import {Box, IconButton, Paper, Stack} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";

interface Props {
    category: CategoryType
}

const CategoryItem: FC<Props> = ({category}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen(prevState => !prevState)
    }

    return <Paper elevation={3}><IconButton onClick={handleToggle}>
        {isOpen ? <Remove/> : <Add/>}
    </IconButton>{category.name}
        { isOpen && <Stack>
            {category.products.map(product => <Box>
                <img style={{width: 20, height: 20}} src={product.image}/>
                {product.title} {product.price}
            </Box>)}
        </Stack>}
    </Paper>
}

export default CategoryItem