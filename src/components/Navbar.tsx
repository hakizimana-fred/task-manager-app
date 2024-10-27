import { Moon, Search, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export const Navbar = () => {
  const { theme,  toggleTheme } = useTheme()
  return ( 
     <nav className="flex items-center justify-between p-4 bg-white dark:bg-darkBg">
      <h1 className="text-xl font-bold dark:text-white">Task Manager</h1>

      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search size={24} className='absolute right-2 top-3 w-5 h-5 text-gray-400 dark:text-gray-300' />
      </div>
      {theme === 'light' ?  
      <Moon size={24} onClick={toggleTheme} className='dark:text-white' /> 
      : 
      <Sun size={24} onClick={toggleTheme} className='dark:text-white' />
    }
    </nav>
  )
}
