import Layout from './components/Layout'
import { TasksProvider } from './context/TasksContext'
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <ThemeProvider>
    <TasksProvider>
      <Layout />
    </TasksProvider>
    </ThemeProvider>
  )
}

export default App
