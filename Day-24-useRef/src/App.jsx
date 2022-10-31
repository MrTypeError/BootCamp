import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Counter'
import Stopwatch from './Stopwatch'
import KittyGallery from './KittyGallery'

function App() {
  return (
    <div className="App">
    {/* <Stopwatch/> */}
    {/* <Counter/>   */}
    <KittyGallery />
    </div>
  )
}

export default App
