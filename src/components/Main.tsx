import { List, CheckCircle, Clock, ChevronDown } from 'lucide-react';
import TaskCard from './Card';
import { useTasks } from '../context/TasksContext';

export const MainSection = () => {
  const { todos } = useTasks()


  return (
    <main className="flex-1 p-6 bg-myGray dark:bg-darkBg overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4  md:hidden">
          <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <List className="h-5 w-5 mr-1" />
            <span>All Tasks</span>
          </button>
          <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <CheckCircle className="h-5 w-5 mr-1" />
            <span>Completed</span>
          </button>
          <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <Clock className="h-5 w-5 mr-1" />
            <span>Pending</span>
          </button>
        </div>

        <button className="flex items-center border px-4 py-2 rounded text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:text-blue-500 dark:hover:text-blue-400">
          Sort <ChevronDown className="ml-2 h-4 w-4" />
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Tasks</h2>
        <div className='flex gap-3 flex-wrap'>
         {todos.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.todo}
            status={task.completed}
          />
        ))}
    </div>
      </div>
    </main>
  );
};

