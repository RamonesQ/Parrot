import React, { useEffect, useState, FormEvent } from 'react';
import { Navbar, Container, Card, Form, Button } from 'react-bootstrap';
import LogoPerfil from '../../assets/Imagens/LogoPerfil.png';
import Icone from '../../assets/Imagens/Icone.png';
import './Feed.css';
import Header from '../Header/Header';
import { listarFeeds, PostPayload } from '../../services/feed';
import { PublicarPost } from '../../services/feed';
import Person from '../../assets/Imagens/Person.png';
import moment from 'moment';

interface PostDetails {
  createdAt: string;
  content: string;
  user_idUser: number;
  User: UserDetails;
}
interface UserDetails {
  name: string;
  apartment: number;
}

const Feed = () => {
  const [lista, setLista] = useState<PostDetails[]>([]);

  const loadAllPosts = async () => {
    const response = await listarFeeds();
    setLista(response.data);
  }

  useEffect(() => {
    loadAllPosts()
  }, []);

  const [publication, setPublication] = useState<string>('');

  const Post = async (event: FormEvent) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem('user') as any); 

    const payload: PostPayload = {
      content: publication,
      user_idUser: user.idUser 
    };

    try {
      const response = await PublicarPost(payload);

      if (response.status !== 201) {
        return alert('Deu algo errado');
      }

      setPublication('');
      loadAllPosts();

    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div>
      <Header />

      <Card style={{ width: '30rem', marginLeft: '35%', marginTop: '0%' }}>
        <Card.Body>
          <div className="testl">
            <div className="img-feed">
              <img src={Person}></img>
            </div>
            <div className="form-feed">
              <Form onSubmit={Post}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    style={{ padding: '', marginRight: '40px' }}
                    type="text"
                    placeholder=""
                    value={publication}
                    onChange={(event) => setPublication(event.target.value)}
                  />
                </Form.Group>

                <Button id="button-feed" type="submit">
                  publicar
                </Button>
              </Form>
            </div>
          </div>
        </Card.Body>
      </Card>
      {lista.map((post: PostDetails) => (
        <Card style={{ width: '30rem', marginLeft: '35%', padding: '' }}>
          <Card.Body>
            <div className="feedBody">
              <div className="img-feed-body">
                <img src={Person}></img>
              </div>
              <div className="textoFeed">
                <Card.Title className="titulo-card">
                  {post.User.name} - apê {post.User.apartment}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </Card.Subtitle>
                <Card.Text>{post.content}</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Feed;
