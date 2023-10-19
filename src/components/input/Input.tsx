import React, {BaseSyntheticEvent, useEffect, useRef, useState} from "react";
import {IconButton, TextField} from "@mui/material";
import {Add} from "@mui/icons-material";
import useThemeColors from "../../hooks/useThemeColors";
import {useAppDispatch} from "../../store/store";
import {setActiveTaskId} from "../../store/reducers/taskReducer";

interface Props {
    onChange: (newValue: string) => void
}

const Input: React.FC<Props> = props => {
    const {onChange} = props
    const dispatch = useAppDispatch()
    const {inputBg,inputBgHovered, buttonBg, backgroundColor} = useThemeColors()
    const [value, setValue] = useState<string>('');
    const [value2, setValue2] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleChange = (event: BaseSyntheticEvent) => {
        // setValue(event.target.value)
        if (inputRef.current === null) return
        console.log(event)
        console.log(inputRef.current.value)
        onChange(inputRef.current.value)
    }

    const handleFocus = () => {
        dispatch(setActiveTaskId(undefined))
    }

    useEffect(() => {
        console.log(value, 'changed value')

        setTimeout(() => {
            setValue2(value)
        }, 1000)
    }, [value]);


    useEffect(() => {
        // console.log(value2, 'changed value 2')

    }, [inputRef.current]);
    // return <><input value={value} onFocus={handleFocus} onChange={handleChange} /></>
    return <TextField
        variant={"filled"}
        sx={{background: inputBg,
            '&:hover': {
                background: inputBgHovered,
            },
            '&.Mui-focused': {
                color: buttonBg
            },
            '&.Mui-disabled': {
                background: backgroundColor
            }
        }}
        onFocus={handleFocus}
        onChange={handleChange}
        InputProps={{
            inputRef: inputRef,
            startAdornment: <IconButton>
                <Add/>
            </IconButton>
        }}
    />
}
export default Input