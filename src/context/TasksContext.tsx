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

    
  async function deleteTask(id: number) {
    try {
      const { data: deletedTodo } = await axios.delete(`${BASE_URL}/todos/${id}`)
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, ...deletedTodo } : todo
        )
      );
    }catch(e) {
      console.log(e)
    }
  }

  return (
    <TasksContext.Provider value={{ todos, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);