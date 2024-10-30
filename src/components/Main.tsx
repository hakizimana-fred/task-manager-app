import {  ChevronDown } from 'lucide-react';
import TaskCard from './Card';
import { useTasks } from '../context/TasksContext';

export const MainSection = () => {
  const {  filteredTasks } = useTasks()
  //const [selectedLanguage, setSelectedLanguage] = useState('english')


  return (
    <main className="flex-1 p-6 bg-myGray dark:bg-darkBg overflow-y-auto" data-testid="main">
      <div className="flex items-center justify-between mb-4">
      

       
        <div className="relative inline-flex items-center">
      <select
        className="appearance-none border px-4 py-2 rounded text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:text-blue-500 dark:hover:text-blue-400 bg-transparent pr-8"
        onChange={(e) => {
          console.log(e.target.value)
        }}
      >
        <option value="english">English</option>
        <option value="french">French</option>
      </select>
      <ChevronDown className="absolute right-2 pointer-events-none h-4 w-4 text-gray-500 dark:text-gray-400" />
    </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Tasks</h2>
        <div className='flex gap-3 flex-wrap'>
        
       {filteredTasks().map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.todo}
          status={task.completed}
          userId={task.userId}
        />
      ))} 
    </div>
      </div>
    </main>
  );
};

