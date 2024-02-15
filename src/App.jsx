import { useState } from 'react'
import './App.css'
import Rock from './components/Rock'
import Paper from './components/Paper'
import Scissors from './components/Scissors'
import TopBar from './components/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>

        <TopBar/>

        <Rock/>
        <Paper/>
        <Scissors/>
  
      </div>
    </div>
  )
}

export default App
