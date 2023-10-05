import React, {useEffect, useState} from "react";
import Input from "../input";
import Button from "../button";
import {Task} from "../../models/Task";



interface Props {
    onCreateTask: (newTask: Task) => void
}

const Form:React.FC<Props> = props => {
    const {onCreateTask} = props

    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const handleChangeInput = (newValue: string) => {
        setInputValue(newValue)
    }

    const handleClick = () => {
        const newTask:Task = {text: inputValue, id: Math.round(Math.random() *20)}
        onCreateTask(newTask)
    }


    useEffect(() => {
        setIsButtonDisabled(!inputValue.length)

    }, [inputValue]);

    return <div>
        <Input  onChange={handleChangeInput}/>
        <Button onClick={handleClick} disable={isButtonDisabled}/>
    </div>
}

export default Form