import React from 'react'
import { Fragment } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import "./Cadastro.css"
import Logo from "../../assets/Imagens/logo.png"
import Background from "../../assets/Imagens/background.png"




const Cadastro = () => {
  return (
    
      
    
    <div>
      <img id="teste" src={Background} alt="" />
      
      <Container className='cada'>
           <img className='logo' src={Logo} alt="Logo-Pagina-Login" />
        <h5 className='login'>CADASTRO</h5>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail" style={{padding: "1% 15%"}}>
    <Form.Control type="email" placeholder="nome" style={{textAlign: "center" }}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail"style={{padding: "1% 15%"}}>
    <Form.Control type="email" placeholder="email" style={{textAlign: "center" }}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail"style={{padding: "1% 15%"}}>
    <Form.Control type="email" placeholder="senha" style={{textAlign: "center" }}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail"style={{padding: "1% 15%"}}>
    <Form.Control type="email" placeholder="confirmar senha" style={{textAlign: "center" }}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail"style={{padding: "1% 15%"}}>
    <Form.Control type="email" placeholder="unidade/apartamento" style={{textAlign: "center" }}/>
     </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword" style={{padding: "1% 15%"}}>
        <Form.Control type="password" placeholder="link da foto" style={{textAlign: "center" }} />
  </Form.Group>
    <Button className='botao' type="submit" style={{background: "#76BB4C", padding: "1% 29%", color: "black"}}>
    entrar
  </Button>
</Form>

            </Container>
            
      </div>
      
  )
}

export default Cadastro
