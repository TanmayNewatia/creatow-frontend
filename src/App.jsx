import { useState } from 'react'
import Card from "./components/card/card.jsx"
import './App.css'
import cardItems from './constants/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
    </>
  )
}

export default App
