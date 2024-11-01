import { List, CheckCircle, Clock } from 'lucide-react';
import { useTasks } from '../context/TasksContext';
import { useTranslation } from 'react-i18next'

export const Sidebar = () => {
  const {  setTaskStatus } = useTasks()
  const {t } = useTranslation()

  return (
    <aside className="w-16 md:w-20 bg-white dark:bg-darkBg h-screen p-4 flex flex-col items-center space-y-8" data-testid="sidebar">
      <button className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        onClick={() => setTaskStatus('all')}
      >
        <List className="h-6 w-6 mb-1" />
        <span className="text-xs">{t('all_tasks')}</span>
      </button>
      <button className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
       onClick={() => setTaskStatus('completed')}
      >
        <CheckCircle className="h-6 w-6 mb-1" />
        <span className="text-xs">{t('completed')}</span>
      </button>
      <button className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
       onClick={() => setTaskStatus('in_progress')}
      >
        <Clock className="h-6 w-6 mb-1" />
        <span className="text-xs">{t('in_progress')}</span>
      </button>
    </aside>
  );
};
