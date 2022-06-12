import './cadastro.css'
import {Container, Button, Form } from "react-bootstrap"
import logo from '../../assets/Imagens/logo.png'

function Cadastro(){
    return(
        <div>
            <Container>
                <Form>
                    <img src={logo} alt='Logo' id='logo' className='logo'/>
                    <div className='cadastro'>CADASTRO</div>
                    <Form.Group className="mb-3" controlId="formBasicNome">
                        <Form.Control type="text" placeholder="nome" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Control type="password" placeholder="confirmar senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicApartament">
                        <Form.Control type="text" placeholder="unidade/apartamento" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLinkPhoto">
                        <Form.Control type="text" placeholder="link da foto" />
                    </Form.Group>
                    <Button type="submit">
                        entrar
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Cadastro