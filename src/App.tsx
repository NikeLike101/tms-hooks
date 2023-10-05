import React, {useEffect, useState} from 'react';
import Form from "./components/form";
import List from "./components/list";
import {Task} from "./models/Task";
import {TasksContext} from "./store/context";
import {getTodos} from "./api/services/todoService/service";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [activeTaskId, setActiveTaskId] = useState<number | undefined>(undefined);
    const handleCreateNewTask = (newTask:Task) => {
        setTasks([...tasks, newTask])
    }

    const handleChangeActiveId = (newId: number | undefined) => {
        setActiveTaskId(newId)
    }

    useEffect(() => {
        console.log('changed tasks' ,tasks)
    }, [tasks]);

    useEffect(() => {
        const getData = async  () => {
         const todo = await getTodos()
         setTasks([...tasks, todo])
        }
        getData()
    }, []);
    return (
     <>
         <TasksContext.Provider value={{tasks: tasks, activeTaskId: activeTaskId, setActiveTaskId: handleChangeActiveId}}>

                <Form onCreateTask={handleCreateNewTask}/>
                <List tasks={tasks}/>

         </TasksContext.Provider>
     </>
  );
}

export default App;
