import HeaderComponent from './components/HeaderComponent.jsx'
import CompletedTasks from './components/CompletedTasks.jsx'
import CurrentTasks from './components/CurrentTasks.jsx' 
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
