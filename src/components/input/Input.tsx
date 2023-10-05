import React, {BaseSyntheticEvent, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {TasksContext} from "../../store/context";

interface Props {
    onChange: (newValue:string) => void
}

const Input:React.FC<Props> = props => {
    const {onChange } = props
    const {setActiveTaskId} = useContext(TasksContext)

    const [value, setValue] = useState<string>('');
    const [value2, setValue2] = useState<string>('');

    const handleChange =  (event: BaseSyntheticEvent) => {
        setValue(event.target.value)
        onChange(event.target.value )
    }

    const handleFocus = () => {
        setActiveTaskId(undefined)
    }

    useEffect(() => {
        console.log(value, 'changed value')
        
        setTimeout(() => {
            setValue2(value)
        },1000)
    }, [value]);


    useEffect(() => {
        // console.log(value2, 'changed value 2')
    }, [value2]);
    return <><input value={value} onFocus={handleFocus} onChange={handleChange} /></>
}
export default Input