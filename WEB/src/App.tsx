import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './components/Login/Login'
import Perfil from './components/Perfil/Perfil'
import Cadastro from './components/Cadastro/Cadastro'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Perfil /> */}
      {/* <Cadastro /> */}
      <Header  />
    </div>
  )
}

export default App
