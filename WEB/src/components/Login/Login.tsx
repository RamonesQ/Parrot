import React from 'react'
import { Fragment } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import Background from "../../assets/Imagens/background.png"
import "./Login.css"
import Logo from "../../assets/Imagens/logo.png"







const Login = () => {
  return (
    <div>
    <img id="teste" src={Background} alt="" />
      
      <Container className='cada'>
           <img className='logo' src={Logo} alt="Logo-Pagina-Login" />
        <h5 className='login'>LOGIN</h5>
        <Form>
  
     
     <Form.Group className="mb-3" controlId="formBasicEmail"style={{padding: "1% 15%"}}>
    <Form.Control type="email" placeholder="email" style={{textAlign: "center" }}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail"style={{padding: "1% 15%"}}>
    <Form.Control type="email" placeholder="senha" style={{textAlign: "center" }}/>
     </Form.Group>
     
    <Button className='botao' type="submit" style={{background: "#76BB4C", padding: "1% 30%", color: "black"}}>
    entrar
  </Button>
</Form>
<a id="cadastre" href="/cadastro">Cadastre-se</a>


            </Container>
            
      </div>
      
  )
//     <div  >
//       <img className="rem" src={Background} alt="Background"  />
//       <Container className='box'>
      
//         <img className='logo' src={Logo} alt="Logo-Pagina-Login" />
//         <h5 className='login'>LOGIN</h5>
//         <Form>
//   <Form.Group className="mb-3" controlId="formBasicEmail"style={{padding: "1% 15%"}}>
//     <Form.Control type="email" placeholder="email" style={{textAlign: "center" }}/>
//      </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPassword" style={{padding: "1% 15%"}}>
//         <Form.Control type="password" placeholder="senha" style={{textAlign: "center" }} />
//   </Form.Group>
//     <Button className='botao' type="submit" style={{background: "#76BB4C", padding: "1% 30%", color: "black"}}>
//     Submit
//   </Button>
// </Form>
//       <a id="cadastre" href="">Cadastre-se</a>
//             </Container>
            
//       </div>
//   )
}

export default Login