import React from 'react'
import { Navbar, Container } from "react-bootstrap";
import Joao from "../../assets/Imagens/Joao.png";
import  "./Perfil.css"
import Header from "../Header/Header"

const Perfil = () => {
  return (
      <div>
        <Header/>
      
    <Container>
        <div className='first'>
        <img src={Joao} alt="" />
        <h1>Nome Sobrenome</h1>

        <div>
          <h2>apê 82</h2>
          <p>00 publicações</p>
        </div>

        <div>
        <h3>user@mail.com</h3>
        </div>
        
        <div>
          <h4>Editar</h4>
        </div>
        </div>

        <div className='first'>
        <img src={Joao} alt="" />
        <h1>Nome </h1>
        </div>
        
        <div>
          <h2>apê 82</h2>
        </div>

        <div>
        <h3>user@mail.com</h3>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo praesentium nihil sequi eligendi, eaque unde eum corrupti doloribus fugiat repellendus fugit,  
             blanditiis soluta! Obcaecati tempora totam illo ipsam velit ipsa!</p>
        
        <div>
          <h4>Editar</h4>
        </div>

        <div className='first'>
        <img src={Joao} alt="" />
        <h1>Nome </h1>
        
        <div>
          <h2>apê 82</h2>
        </div>

        <div>
        <h3>user@mail.com</h3>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo praesentium nihil sequi eligendi, eaque unde eum corrupti doloribus fugiat repellendus fugit,  
             blanditiis soluta! Obcaecati tempora totam illo ipsam velit ipsa!</p>
        
        <div>
          <h4>Editar</h4>
        </div>

        <div className='first'>
        <img src={Joao} alt="" />
        <h1>Nome </h1>
        
        <div>
          <h2>apê 82</h2>
        </div>

        <div>
        <h3>user@mail.com</h3>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo praesentium nihil sequi eligendi, eaque unde eum corrupti doloribus fugiat repellendus fugit,  
             blanditiis soluta! Obcaecati tempora totam illo ipsam velit ipsa!</p>
        
        <div>
          <h4>Editar</h4>
        </div>
        </div>
      </div>
    
   
    </Container>       
</div>
  )
}

export default Perfil