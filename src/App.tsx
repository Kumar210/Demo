import { useState } from 'react'
import Farms from './Components/Farms/Farms'
import Liquidty from './Components/Liquidity/Liquidty'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Farms />
      {/* <Liquidty /> */}
    </div>
  )
}

export default App
