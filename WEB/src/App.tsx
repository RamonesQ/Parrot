import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './components/Login/Login'
import Perfil from './components/Perfil/Perfil'
import Cadastro from './components/Cadastro/Cadastro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Perfil /> */}
      <Cadastro />
    </div>
  )
}

export default App
