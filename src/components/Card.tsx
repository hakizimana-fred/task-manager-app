import { useState } from 'react';
import { EllipsisVertical } from 'lucide-react';
import { Menu, Dialog, Transition, MenuItems, MenuButton, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/react';
import { Fragment } from 'react';
import { useTasks } from '../context/TasksContext';

interface TaskCardProps {
  title: string;
  status: boolean;
  createdAt?: string;
  id: number
}

const TaskCard = ({id, title, status, createdAt }: TaskCardProps) => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [isCreatePopupOpen, setCreatePopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { deleteTask } = useTasks()

  const getStatusColor = () => {
    return status ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700';
  };

  const handleMenuClick = (action: string) => {
    switch (action) {
      case 'Delete':
        setDeleteDialogOpen(true);
        break;
      case 'Edit':
        setEditPopupOpen(true);
        break;
      case 'Create':
        setCreatePopupOpen(true);
        break;
      case 'Mark Complete':
        // Handle "Mark Complete" logic here
        break;
      default:
        break;
    }
  };

   const handleConfirmDelete = () => {
    deleteTask(id)
    setDeleteDialogOpen(false);
    // Perform delete operation here (e.g., API call)
  };

  const handleCloseModal = () => {
    setDeleteDialogOpen(false);
    setEditPopupOpen(false);
    setCreatePopupOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 mb-4">
      <div className="flex justify-between mb-4">
        <div>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${getStatusColor()}`}>
            {status ? 'Completed' : 'In Progress'}
          </span>
          <h3 className="text-lg mb-1 font-medium text-gray-800 dark:text-gray-200 mt-3">
            {title}
          </h3>
        </div>
        <div className="flex flex-col items-end">
          <Menu as="div" className="relative">
            {!isDeleteDialogOpen && !isEditPopupOpen && !isCreatePopupOpen && (
              <MenuButton className="text-gray-500 dark:text-gray-400 cursor-pointer mb-2">
                <EllipsisVertical />
              </MenuButton>
            )}
            <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right bg-white dark:bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {['Create', 'Edit', 'Delete', 'Mark Complete'].map((action) => (
                <Menu.Item key={action}>
                  {({ active }) => (
                    <button
                      onClick={() => handleMenuClick(action)}
                      className={`${
                        active ? 'bg-gray-100 dark:bg-gray-700' : ''
                      } w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                    >
                      {action}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">Created: {createdAt}</p>
      </div>

      {/* Delete Confirmation Dialog */}
      <Transition appear show={isDeleteDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
          <div className="fixed inset-0 flex items-center justify-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <DialogTitle className="text-gray-700 dark:text-gray-300">Delete Item</DialogTitle>
                <p className="mt-2">Are you sure you want to delete this item?</p>
                <div className="flex mt-4 justify-end gap-2">
                  <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Cancel</button>
                  <button onClick={handleConfirmDelete} className="px-4 py-2 bg-red-500 text-white rounded">Confirm</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      {/* Edit Popup */}
      <Transition appear show={isEditPopupOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
          <div className="fixed inset-0 flex items-center justify-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <Dialog.Title className="text-gray-800 dark:text-gray-200">Edit Item</Dialog.Title>
                <input type="text" className="w-full px-3 py-2 mt-4 mb-4 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white" placeholder="Edit title" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={() => { handleCloseModal(); /* Execute update logic here */ }} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
              </Dialog.Panel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      {/* Create Popup */}
      <Transition appear show={isCreatePopupOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
          <div className="fixed inset-0 flex items-center justify-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <DialogTitle className="text-gray-800 dark:text-gray-200">Create Item</DialogTitle>
                <input type="text" className="w-full px-3 py-2 mt-4 mb-4 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white" placeholder="Enter title" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={() => { handleCloseModal(); /* Execute create logic here */ }} className="px-4 py-2 bg-green-500 text-white rounded">Create</button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default TaskCard;
