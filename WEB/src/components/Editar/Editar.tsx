import { Button, Container, Form } from "react-bootstrap";
import "./Editar.css"
import Logo from "../../assets/Imagens/logo.png"
import Background from "../../assets/Imagens/background.png"
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Api from "../../api"
import { useEffect, useState } from "react";



const Editar = () => {

  const user = JSON.parse(localStorage.getItem('user') as any);

  const { idUser } = useParams();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [client, setClient] = useState();
  const navigate = useNavigate();

  useEffect(() => {
      async function getsClients() {
          const response = await Api.get('/user');
          setClient(response.data)

      }

  }, [idUser]);

  const onSubmit = async data => {
      Api.put(`/user/${user.idUser}`, data)
      navigate("/");
  };


  return (
    <div>
      <img id="teste" src={Background} alt="" />

      <Container className='cada'>
        <img className='logo' src={Logo} alt="Logo-Pagina-Login" />
        <h5 className='login'>Editar</h5>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control name="name" {...register('name', { required: true })} type="text" placeholder="nome" style={{ textAlign: "center" }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control name="email" {...register('email', { required: true })} type="email" placeholder="email" style={{ textAlign: "center" }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control name="password" {...register('password', { required: true })} type="password" placeholder="senha" style={{ textAlign: "center" }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control name="password" type="password" placeholder="confirmar senha" style={{ textAlign: "center" }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control name="apartment" {...register('apartment', { required: true })} type="number" placeholder="unidade/apartamento" style={{ textAlign: "center" }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{ padding: "1% 15%" }}>
            <Form.Control type="password" placeholder="link da foto" style={{ textAlign: "center" }} />
          </Form.Group>
          <Button className='botao' type="submit" style={{ background: "#76BB4C", padding: "1% 29%", color: "black" }}>
            entrar
          </Button>
        </Form>


      </Container>

    </div>

  )
}

export default Editar
