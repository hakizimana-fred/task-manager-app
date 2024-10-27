import { Moon, Search } from 'lucide-react'
import React from 'react'

export const Navbar = () => {
  return (
       
     <nav className="flex items-center justify-between p-4 bg-lightBg dark:bg-darkBg">
      <h1 className="text-xl font-bold">Task Manager</h1>

      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search size={24} className='absolute right-2 top-3 w-5 h-5 text-gray-400 dark:text-gray-300' />
      </div>
      <Moon size={24} /> 
    </nav>
  )
}
