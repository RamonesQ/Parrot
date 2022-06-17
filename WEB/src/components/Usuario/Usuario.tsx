import React from 'react'
import { Navbar, Container, Card, } from "react-bootstrap";
import LogoPerfil from "../../assets/Imagens/LogoPerfil.png"
import Icone from "../../assets/Imagens/Icone.png"
import "./Usuario.css"
import Header from '../Header/Header';
import Person from "../../assets/Imagens/Person.png"

const Perfil = () => {
  return (
    <div>

      <Header />

      <Card style={{ width: '30rem', marginLeft: "35%", marginTop: "0%" }}>
        <Card.Body>
          <div className='userscont'>
            
            <img src={Person} alt="Imagem Cliente" />
            
            <div className='users'>
              <div className='usertext'>
                <p>Nome Sobrenome</p>
                <p>Ap 82  </p>
                <p>user@user </p>
                <p>00 publicações</p>
              </div>

              <div className='editar'>
                <button type='button' id="editbutton">editar perfil</button>
              </div>
            </div>

          </div>

        </Card.Body>
      </Card>
      <Card style={{ width: '30rem', marginLeft: "35%", padding: "10% 5% 7%" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text >
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}

export default Perfil