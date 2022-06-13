import React from 'react'
import { Fragment } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import "./Login.css"
import Logo from "../../assets/Imagens/logo.png"




const Login = () => {
  return (
    <div>
      <Container>
        <img className='logo' src={Logo} alt="Logo-Pagina-Login" />
        <h5 className='login'>LOGIN</h5>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail"style={{padding: "1% 15%"}}>
    <Form.Control type="email" placeholder="email" />
     </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword" style={{padding: "1% 15%"}}>
        <Form.Control type="password" placeholder="senha"  />
  </Form.Group>
    <Button className='botao' type="submit" style={{background: "#76BB4C", padding: "1% 30%", color: "black"}}>
    Submit
  </Button>
</Form>
      <a id="cadastre" href='/'>Cadastre-se</a>
            </Container>
      </div>
  )
}

export default Login