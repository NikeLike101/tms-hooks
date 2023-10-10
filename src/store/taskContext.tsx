import {Task} from "../models/Task";
import React, {PropsWithChildren, useContext, useEffect, useState} from "react";
import {getTodos} from "../api/services/todoService/service";
import {ThemeContext} from "./themeContext";


type TasksContextType = {
    tasks: Task[]
    setTasks: (newTasks: Task[]) => void
    activeTaskId: number | undefined
    setActiveTaskId: (newId: number | undefined) => void
}

const initialTasksContextValue =
    {
        activeTaskId: undefined,
        tasks: [],
        setActiveTaskId: () => {
        },
        setTasks: () => {
        }
    }

export const TasksContext =
    React.createContext<TasksContextType>(initialTasksContextValue)

export const TaskContextProvider: React.FC<PropsWithChildren> = (props) => {
    // const {theme} = useContext(ThemeContext)
    const [tasks, setTasks] = useState<Task[]>([]);
    const [activeTaskId, setActiveTaskId] = useState<number | undefined>(undefined);
    const handleChangeActiveId = (newId: number | undefined) => {
        setActiveTaskId(newId)
    }
    useEffect(() => {
        const rawTasksFromLocalStorage = localStorage.getItem('tasks')
        // if (rawTasksFromLocalStorage === null) return
        const getData = async  () => await getTodos()


        const tasksFromLocalStorage = rawTasksFromLocalStorage !== null ?
            JSON.parse(rawTasksFromLocalStorage) : []
        if (tasksFromLocalStorage.length === 0) {
            getData().then(response => handleChangeTasks([response]))
            return
        }

        setTasks(tasksFromLocalStorage)
    }, []);


    const handleChangeTasks = (tasks: Task[]) => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        setTasks(tasks)
    }

    return <TasksContext.Provider value={{
        tasks,
        setTasks: handleChangeTasks,
        activeTaskId,
        setActiveTaskId: handleChangeActiveId
    }}>
        {props.children}
    </TasksContext.Provider>
}