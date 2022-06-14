import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from '../components/Cadastro/Cadastro';
import Header from '../components/Header/Header';
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';
import Perfil from '../components/Perfil/Perfil';



const AppRoutes = () => {

    return (
        <Router>
            <div className="container">
                <br />
                <Routes>
                    {/* <Route path="/header" element={<Header />}></Route> */}
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/cadastro" element={<Cadastro />}></Route>
                    <Route path="/perfil" element={<Perfil />}></Route>
                    <Route path="/" element={<HomePage />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default AppRoutes;