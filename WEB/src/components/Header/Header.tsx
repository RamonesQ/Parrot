import { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoPerfil from "../../assets/Imagens/LogoPerfil.png"
import { AuthContext } from '../../contexts/auth';
import "./Header.css"




const Header = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  }
  return (
    <div className='testz'>
      <Navbar className='navi' bg="light" style={{ boxShadow: "0px 4px 6px #d1cfcf", }}>
        <Container>
                    <img src={LogoPerfil} alt="Logo-perfil" />
                    <a id="headerFeed" href="http://localhost:3000/feed">Feed</a>
                    <a id="headerPerfil"href="http://localhost:3000/">Perfil</a>
                    {/* <Link to={`/feed`} className="btn btn-success">
                    <i className="fa fa-edit">Feed</i>
                  </Link> */}
          <Navbar.Brand href="#home" style={{ color: "#76BB4C" }}>Olá Usuário <a onClick={handleLogout} id="barra" style={{ color: "#6033AA" }}>Sair</a></Navbar.Brand>
        </Container>
      </Navbar>
            </div>
  )
}

export default Header