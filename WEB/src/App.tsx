import './App.css'
import Header from './components/Header/Header'
import AppRoutes from './routes'


interface User {
  name: string,
  email: string,
  apartment: number,
  password: string,
}

function App(): JSX.Element {
  // const [userList, setUser] = useState<User[]>([] as User[])
  // useEffect(() => {
  //   renderUsers().then(users => setUser(users))
  // }, [])

  return (
  
    // <Header />
    <AppRoutes />
  )
}

export default App
