import { useState } from 'react'
import Farms from './Components/Farms/Farms'
import Liquidty from './Components/Liquidity/Liquidty'
import NFT from './Components/NFT/NFT'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Farms />
      {/* <Liquidty /> */}
      {/* <Wallet /> */}
      {/* <NFT /> */}
    </div>
  )
}

export default App
