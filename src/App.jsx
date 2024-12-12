import HeaderComponent from './components/HeaderComponentsQS.jsx'
import CompletedTasks from './components/CompletedTasksciao.jsx'
import CurrentTasks from './components/CurrentTaskstest.jsx' 
import './App.css'


function App() {
  

  return (
    <>
      <HeaderComponent />
      <div className='px-3 py-4'>
      <CurrentTasks />
      <hr />
      <CompletedTasks />

      </div>

    </>
  )
}

export default App
