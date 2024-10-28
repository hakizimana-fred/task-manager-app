import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import { ITodo } from '../interfaces';

type TasksContextProps = {
    todos: ITodo[]
    deleteTask: (id: number) => void
}

const TasksContext = createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
     const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        (async () => {
            const { data: { todos } } = await axios.get(`${BASE_URL}/todos`)
            setTodos(todos)
        })()
    }, [])

    
  function deleteTask(id: number) {
    console.log(id)
  }

  return (
    <TasksContext.Provider value={{ todos, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);