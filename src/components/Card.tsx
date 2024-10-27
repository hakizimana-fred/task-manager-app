import {  EllipsisVertical } from 'lucide-react';

interface TaskCardProps {
  title: string;
  status: string;
  createdAt: string;
}

const TaskCard = ({ title, status, createdAt }: TaskCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'To Do':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5  mb-4">
    <div className='flex  justify-between mb-4'>
      <div>
        <span className={`text-xs font-semibold px-2 py-1 rounded ${getStatusColor()}`}>
          {status}
        </span>
        <h3 className="text-lg mb-1 font-medium text-gray-800 dark:text-gray-200 mt-3">
          {title}
        </h3>
      </div>

      <div className="flex flex-col items-end">
        <EllipsisVertical className="text-gray-500 dark:text-gray-400 cursor-pointer mb-2" />
      </div>
      </div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">Created: {createdAt}</p>
      </div>
    </div>
  );
};

export default TaskCard;
