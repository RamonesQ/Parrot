import React, { useEffect, useState, FormEvent } from 'react'
import { Navbar, Container, Card, Form, Button, } from "react-bootstrap";
import LogoPerfil from "../../assets/Imagens/LogoPerfil.png"
import Icone from "../../assets/Imagens/Icone.png"
import  "./Feed.css"
import Header from '../Header/Header';
import { listarFeeds } from '../../services/feed';
import { PublicarPost } from '../../services/feed';


interface PostDetails{
  createdAt: string;
  content: string;
  user_idUser: number;
  User: UserDetails;
}

interface UserDetails{
  name: string;
  apartment: number;
}


const Feed = () => {
  const [lista, setLista] = useState<PostDetails[]>([])
  useEffect(()=> {
    console.log("iniciou")
    const getData = async () => {
      const response = await listarFeeds()
      setLista(response.data)
    }
    getData()
  }, [])
  
  const [publication, setPublication] = useState<string>("");

  const Post = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
     
    }

    try {
      const response = await PublicarPost(payload);

      if(response.status !== 201){
        return alert("Deu algo errado");
      }

      alert("Publicado")
    } catch (error) {
      
    }
  };


  return (
    <div>
  
    <Header />
    
      <Card style={{ width: '30rem', marginLeft: "35%", marginTop: "0%" }}>
    <Card.Body>
    <Form onSubmit={Post}>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder=""  value={publication} onChange={(event) => setPublication(event.target.value)}/>
   
  </Form.Group>

  
  <Button variant="primary" type="submit" >
    Submit
  </Button>
  </Form>
      </Card.Body>
</Card>
  {lista.map((post: PostDetails)=> (
    <Card style={{ width: '30rem', marginLeft: "35%", padding: "5% 5% 5%" }}>
    <Card.Body>
     
      <Card.Title className="titulo-card">{post.User.name} - apê {post.User.apartment}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{post.createdAt}</Card.Subtitle>
      <Card.Text >
        {post.content}
      </Card.Text>
        </Card.Body>
    </Card>
  ))}

        
        </div>
  )
}

export default Feed