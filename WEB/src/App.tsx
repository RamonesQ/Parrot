import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './components/Login/Login'
import Perfil from './components/Perfil/Perfil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Login /> */}
      <Perfil />
    </div>
  )
}

export default App
