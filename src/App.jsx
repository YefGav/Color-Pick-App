import { useState } from 'react'
import { ColorPicker } from './components/ColorPicker'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ColorPicker />
      </div>
    
    </>
  )
}

export default App
