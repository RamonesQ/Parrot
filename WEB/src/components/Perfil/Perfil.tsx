import React, { useEffect, useState } from 'react'
import { Navbar, Container, Card } from "react-bootstrap";
import LogoPerfil from "../../assets/Imagens/LogoPerfil.png"
import "./Perfil.css"
import Header from '../Header/Header';
import Person from "../../assets/Imagens/Person.png"
import Icone from "../../assets/Imagens/icone.png"
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Perfil = () => {
  const { idUser } = useParams();
  const [user, setUser] = useState([])

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:4000/user/2`);
      setUser(response.data)
    })();

  }, []);

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
                <p>{user.name}</p>
                <p>Ap {user.apartment} </p>
                <p> {user.email}</p>
              </div>
              <div className='editar'>
                <Link to={`/editar/${user.idUser}`} className="btn btn-primary">
                  <i className="fa fa-edit">Editar</i>
                </Link>
              </div>
            </div>

          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem', marginLeft: "35%", padding: "10% 5% 10%" }}>

        <div className='nada'>
          <p>Você ainda não fez nenhuma publicação :(</p>
        </div>

        <div className='icone'>
          <img src={Icone} alt="Icone" />
        </div>
        {/* <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text >
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body> */}
      </Card>

    </div>
  )
}

export default Perfil