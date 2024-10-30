import { Moon, Search, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useTasks } from '../context/TasksContext'
import { useTranslation } from 'react-i18next'

    
    
export const Navbar = () => {
  const { theme,  toggleTheme } = useTheme()
  const { searchQuery, setSearchQuery } = useTasks()
  const { t } = useTranslation()

  return ( 
     <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-white dark:bg-darkBg" data-testid="navbar">
      <h1 className="text-xl font-bold dark:text-gray-300 mb-2 md:mb-0">Task Manager</h1>

      <div className="relative">
        <input
          type="text"
          placeholder={t('search')} className="pl-10 pr-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <Search size={24} className='absolute right-2 top-3 w-5 h-5 text-gray-400 dark:text-gray-300' />
      </div>
      <div className='mt-2 md:mt-0'>
      {theme === 'light' ?  
      <Moon data-testid="moon-icon" size={24} onClick={toggleTheme} className='dark:text-gray-300' /> 
      : 
      <Sun data-testid="sun-icon" size={24} onClick={toggleTheme} className='dark:text-gray-300' />
    }
    </div>
    </nav>
  )
}
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  