import React from 'react'
import axios from 'axios';
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import { ITodo } from '../interfaces';

type TasksContextProps = {
    todos: ITodo[]
    createTask: (userId: number, newTitle: string) => void
    deleteTask: (id: number) => void
    editTask: (id: number, newTitle: string) => void
    searchQuery: string
    setSearchQuery: Dispatch<SetStateAction<string>>;
    taskStatus: string;
    setTaskStatus: Dispatch<SetStateAction<string>>;
    filteredTasks: () => ITodo[]
}

const TasksContext = createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
     const [todos, setTodos] = useState<ITodo[]>([])
     const [searchQuery, setSearchQuery] = useState<string>('')
    const [taskStatus, setTaskStatus] = useState<string>('all');

    useEffect(() => {
        (async () => {
            const { data: { todos } } = await axios.get(`${BASE_URL}/todos`)
            setTodos(todos)
        })()
    }, [])


  function filteredTasks() {
    return todos
            .filter((todo) => !todo.isDeleted)
            .filter((todo) => searchQuery === "" || todo.todo.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
            .filter((todo) => taskStatus === 'all' || 
             (taskStatus === 'completed' && todo.completed) || 
             (taskStatus === 'in_progress' && !todo.completed)
          )
  }

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
    <TasksContext.Provider value={{ todos, deleteTask, editTask, createTask, searchQuery, setSearchQuery, filteredTasks, taskStatus, setTaskStatus }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);