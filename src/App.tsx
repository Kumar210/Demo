import { useState } from 'react'
import Farms from './Components/Farms/Farms'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Farms />
    </div>
  )
}

export default App
