import React from 'react'
import { Navbar, Container, Card, } from "react-bootstrap";
import LogoPerfil from "../../assets/Imagens/LogoPerfil.png"
import Icone from "../../assets/Imagens/Icone.png"
import "./Usuario.css"
import Header from '../Header/Header';
import Person from "../../assets/Imagens/Person.png"
import { Link } from 'react-router-dom';


const Perfil = () => {
  return (
    <div>

      <Header />

      <Card style={{ width: '30rem', marginLeft: "35%", marginTop: "0%" }}>
        <Card.Body>

        <div className='users'>
              <img src={Person} alt="" />
              {/* <Card.Title>Card Title</Card.Title> */}
              <div className='users'>
                <div className='usertext'>
                  <p>Nome Sobrenome</p>
                  <p>Ap  82</p>
                  <p> User</p>
                  <p> Publicacoes </p>
                </div>
                <div className='editar'>
                <Link to={`/editar/`} className="btn btn-primary" id='userButton'>
                    <i className="fa fa-edit">Editar</i>
                  </Link>
                  
                </div>
              </div>

            </div>
          

        </Card.Body>
      </Card>
      <Card style={{ width: '30rem', marginLeft: "35%", padding: "0% 0% 0%" }}>
        <Card.Body>

        <div className='users'>
              <img src={Person} alt="" />
              {/* <Card.Title>Card Title</Card.Title> */}
              <div className='users'>
                <div className='usertext'>
                  <p>nome - ap</p>
                  <p>data</p>
                  <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius doloribus libero corrupti provident? Quae, asperiores aspernatur quasi laudantium dicta deleniti sequi magni earum similique nostrum ipsa. Veniam cupiditate aut soluta.
                  </p>
                </div>
                <div className='editar'>
                
                  
                </div>
              </div>

            </div>
        
        </Card.Body>
      </Card>

    </div>
  )
}

export default Perfil