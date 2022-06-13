import React from 'react'
import { Navbar, Container } from "react-bootstrap";
import LogoPerfil from "../../assets/Imagens/LogoPerfil.png"
import Icone from "../../assets/Imagens/Icone.png"
import  "./Perfil.css"

const Perfil = () => {
  return (
    <div>
    <Navbar className='nav' bg="light" style={{boxShadow: "0px 4px 6px #d1cfcf", }}>
         <Container>
        <img src={LogoPerfil} alt="Logo-perfil" />
      <Navbar.Brand href="#home" style={{color: "#76BB4C"}}>Olá Usuário<a style={{color: "#6033AA"}}>    Sair</a></Navbar.Brand>
    </Container>
  </Navbar>

  <Container>
<div className='first'>
<h1>teste</h1>
</div>

<div className='second'>
    <h4>Você ainda não fez nenhuma publicação</h4>
<img src={Icone} alt="" />
</div>

  </Container>
        
        </div>
  )
}

export default Perfil