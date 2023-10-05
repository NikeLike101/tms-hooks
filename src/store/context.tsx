import {Task} from "../models/Task";
import React from "react";


type TasksContextType = {
    tasks: Task[]
    activeTaskId: number | undefined
    setActiveTaskId: (newId: number | undefined) => void
}

export const TasksContext =
    React.createContext<TasksContextType>({activeTaskId: undefined,
        tasks: [], setActiveTaskId: () => {} })