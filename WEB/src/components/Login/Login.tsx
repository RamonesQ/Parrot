import React, { useContext, useState } from 'react'
import { Fragment } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import Background from "../../assets/Imagens/background.png"
import "./Login.css"
import Logo from "../../assets/Imagens/logo.png"
// import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';



const Login = () => {
  
  
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  }

  return (
    <div>
      <img id="teste" src={Background} alt="" />

      <Container className='cada'>
        <img className='logo' src={Logo} alt="Logo-Pagina-Login" />
        <h5 className='login'>LOGIN</h5>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control type="email" placeholder="email" style={{ textAlign: "center" }}
              value={email} onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ padding: "1% 15%" }}>
            <Form.Control
              type="password" placeholder="senha" style={{ textAlign: "center" }}
              value={password} onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button className='botao' type="submit" style={{ background: "#76BB4C", padding: "1% 30%", color: "black" }}>
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