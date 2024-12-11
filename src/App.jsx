import headerComponent from './components/headerComponent'
import completedTasks from './components/completedTasks'
import CurrentTasks from './components/currentTasks'
import './App.css'


function App() {
  

  return (
    <>
      {headerComponent()}
      {CurrentTasks()}
      {completedTasks()}
    </>
  )
}

export default App
