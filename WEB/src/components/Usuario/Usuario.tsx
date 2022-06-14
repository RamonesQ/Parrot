import React from 'react'
import { Navbar, Container,Card } from "react-bootstrap";
import LogoPerfil from "../../assets/Imagens/LogoPerfil.png"
import  "./Usuario.css"
import Header from '../Header/Header';

const Perfil = () => {
  return (
    <div>

      <Header />
    
      <Card style={{ width: '30rem', marginLeft: "35%", marginTop: "0%" }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text >
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
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