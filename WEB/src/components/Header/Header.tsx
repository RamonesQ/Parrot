import React from 'react'
import { Navbar, Container } from "react-bootstrap";
import LogoPerfil from "../../assets/Imagens/LogoPerfil.png"
import Icone from "../../assets/Imagens/Icone.png"
import  "./Header.css"

const Header = () => {
  return (
    <div>
    <Navbar className='nav' bg="light" style={{boxShadow: "0px 4px 6px #d1cfcf", }}>
         <Container>
        <img src={LogoPerfil} alt="Logo-perfil" />
      <Navbar.Brand href="#home" style={{color: "#76BB4C"}}>Olá Usuário <a id="barra" style={{color: "#6033AA"}}>     Sair</a></Navbar.Brand>
    </Container>
  </Navbar>

        </div>
  )
}

export default Header