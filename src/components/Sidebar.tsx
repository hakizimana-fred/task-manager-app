import { List, CheckCircle, Clock } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-16 md:w-20 bg-white dark:bg-darkBg h-screen p-4 flex flex-col items-center space-y-8">
      <button className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
        <List className="h-6 w-6 mb-1" />
        <span className="text-xs">All Tasks</span>
      </button>
      <button className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
        <CheckCircle className="h-6 w-6 mb-1" />
        <span className="text-xs">Completed</span>
      </button>
      <button className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
        <Clock className="h-6 w-6 mb-1" />
        <span className="text-xs">Pending</span>
      </button>
    </aside>
  );
};
