import { useState } from 'react'
import './styles/global.css'
import { Habit } from './components/Habit'

function App() {

  return (
    <div className="App">
      <Habit completed={3} />
      <Habit completed={16} />
      <Habit completed={21} />
      <Habit completed={55} />
      <Habit completed={67} />
    </div>
  )
}

export default App
