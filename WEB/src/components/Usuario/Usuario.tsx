import React from 'react'
import { Navbar, Container } from "react-bootstrap";
import LogoPerfil from "../../assets/Imagens/LogoPerfil.png"
import  "./Usuario.css"
import Header from '../Header/Header';

const Perfil = () => {
  return (
    <div>
    <Header />
  <Container>
<div className='first'>
<h1>teste</h1>
</div>
<div className='second'>
    <h4>Você ainda não fez nenhuma publicação</h4>
</div>
  </Container>
        
        </div>
  )
}

export default Perfil