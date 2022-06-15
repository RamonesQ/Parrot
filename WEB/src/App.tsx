import './App.css'
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
  
    <AppRoutes />
  )
}

export default App
