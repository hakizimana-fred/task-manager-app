import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import { ITodo } from '../interfaces';

type TasksContextProps = {
    todos: ITodo[]
    createTask: (userId: number, newTitle: string) => void
    deleteTask: (id: number) => void
    editTask: (id: number, newTitle: string) => void
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

  async function createTask(userId: number, newTitle: string) {
    try {
      const { data: newTodo } = await axios.post(`${BASE_URL}/todos/add`, {
        todo: newTitle,
        id: todos.length + 1,
        completed: false,
        userId
      })
      setTodos((prevTodos) => [...prevTodos, newTodo])
    }catch(e){
      console.log(e)
    }
  }

   async function editTask(id: number, newTitle: string) {
    try {
      const { data: updatedTask } = await axios.patch(`${BASE_URL}/todos/${id}`, {todo: newTitle })
      console.log(updatedTask.todo)
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, ...updatedTask} : todo
        )
      );

    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };
    
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
    <TasksContext.Provider value={{ todos, deleteTask, editTask, createTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);