import { Fragment, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './components/Login/Login'
import Perfil from './components/Perfil/Perfil'
import Cadastro from './components/Cadastro/Cadastro'
import Header from './components/Header/Header'
import Usuario from './components/Usuario/Usuario'
import { renderUsers } from './api'
import AppRoutes from './routes'

interface User {
  name: string,
  email: string,
  apartment: number,
  password: string,
}

function App(): JSX.Element {
  const [userList, setUser] = useState<User[]>([] as User[])
  useEffect(() => {
    renderUsers().then(users => setUser(users))
  }, [])

  return (
  <AppRoutes />
  )
}

export default App
