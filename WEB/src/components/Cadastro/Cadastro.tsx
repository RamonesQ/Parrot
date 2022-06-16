import { Button, Container, Form } from "react-bootstrap";
import "./Cadastro.css"
import Logo from "../../assets/Imagens/logo.png"
import Background from "../../assets/Imagens/background.png"
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Api from "../../api"



const Cadastro = () => {


  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async data => {
     await Api.post("/user", data);
    

    navigate('/');
  }

  return (
    <div>
      <img id="teste" src={Background} alt="" />

      <Container className='cada'>
        <img className='logo' src={Logo} alt="Logo-Pagina-Login" />
        <h5 className='login'>CADASTRO</h5>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control name="name" {...register('name', { required: true })} type="text" placeholder="nome" style={{ textAlign: "center" }} />
            <small className="form-text text-danger">{errors.name && 'Nome inválido'}</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control name="email" {...register('email', { required: true })} type="email" placeholder="email" style={{ textAlign: "center" }} />
            <small className="form-text text-danger">{errors.email && 'Email inválido'}</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control name="password" {...register('password', { required: true })} type="password" placeholder="senha" style={{ textAlign: "center" }} />
            <small className="form-text text-danger">{errors.password && 'Password inválido'}</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control name="password" type="password" placeholder="confirmar senha" style={{ textAlign: "center" }} />
            <small className="form-text text-danger">{errors.password && 'Password inválido'}</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control name="apartment" {...register('apartment', { required: true })} type="number" placeholder="unidade/apartamento" style={{ textAlign: "center" }} />
            <small className="form-text text-danger">{errors.apartment && 'Apartment inválido'}</small>
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

export default Cadastro
