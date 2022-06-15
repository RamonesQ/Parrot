import { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import LogoPerfil from "../../assets/Imagens/LogoPerfil.png"
import { AuthContext } from '../../contexts/auth';
import "./Header.css"



const Header = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  }
  return (
    <div className='teste'>
      <Navbar className='nav' bg="light" style={{ boxShadow: "0px 4px 6px #d1cfcf", }}>
        <Container>
          <img src={LogoPerfil} alt="Logo-perfil" />
          <Navbar.Brand href="#home" style={{ color: "#76BB4C" }}>Olá Usuário <button onClick={handleLogout} id="barra" style={{ color: "#6033AA" }}>     Sair</button></Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header