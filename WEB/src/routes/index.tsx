import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from '../components/Cadastro/Cadastro';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import Perfil from '../components/Perfil/Perfil';
import Usuario from '../components/Usuario/Usuario';



const AppRoutes = () => {

    return (
        <Router>
            <div className="container">
                <br />
                <Routes>
                <Fragment>
                    <Route path="/header" element={<Header />}></Route>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/cadastro" element={<Cadastro />}></Route>
                    <Route path="/perfil" element={<Perfil />}></Route>
                    <Route path="/usuario" element={<Usuario />}></Route>
                    </Fragment>
                </Routes>
            </div>
        </Router>
    );
}

export default AppRoutes;