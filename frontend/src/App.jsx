import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>

      <div className='card'>
      
      <h1>welcomeg to dockegr hello projegct</h1>
      <p>
        This is a simple test my project to ggg demonstrate the use of Docker with React and Vite.
        <br />
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </p>
      <p>
        Vite + React + Docker
      </p>




        </div>



      </div>
  )
}

export default App
