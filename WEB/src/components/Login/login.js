import "./Login.css"
import { Fragmet } from "react"
import { Navbar, Container, Button, Table, Modal, Form } from "react-bootstrap"

function Login() {
    return (
        <div>

            <h1>Testando</h1>

            <Container>
                <Form style={{marginTop: "200px"}}>
                    <img src="./logo.png" alt="" />
                    <h1>Login</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="success" type="submit" style={{width: "350px"}}>
                        Entrar
                    </Button>
                </Form>

            </Container>


        </div>
    )
}

export default Login