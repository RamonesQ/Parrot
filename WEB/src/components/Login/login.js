import "./Login.css"
import { Fragmet } from "react"
import { Navbar, Container, Button, Table, Modal, Form } from "react-bootstrap"
import Logo from "../../assets/Imagens/logo.png"

function Login() {
    return (
        <div>

            <Container>

                <Form style={{ marginTop: "50px" }}>
                    <div className="logo">
                        <img id="logo" src={Logo} alt="Logo" />
                    </div>
                    <div className="login">
                        <h1>LOGIN</h1>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="success" type="submit"  style={{ width: "350px" }}>
                        Entrar
                    </Button>
                    <div className="cadastro">
                        <p>Cadastre-se</p>
                    </div>
                </Form>

            </Container>


        </div>
    )
}

export default Login