import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cadastro from '../components/Cadastro/Cadastro';
import Login from '../components/Login/Login';
import Perfil from '../components/Perfil/Perfil';
import Usuario from '../components/Usuario/Usuario';
import Feed from "../components/Feed/Feed";
import { AuthContext, AuthProvider } from '../contexts/auth';

import Editar from '../components/Editar/Editar';



const AppRoutes = () => {

    const PrivateRoute = ({ children }: { children: JSX.Element }) => {

        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className='loading'>Carregando...</div>;
        }

        if (!authenticated) {
            return <Navigate to='/login' />
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Fragment>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/cadastro" element={<Cadastro />}></Route>
                        <Route path="/editar/:idUser" element={<Editar />}></Route>
                        <Route path="/feed" element={<PrivateRoute><Feed /></PrivateRoute>}></Route>
                        <Route path="/" element={<PrivateRoute><Perfil /></PrivateRoute>}></Route>
                        <Route path="/usuario" element={<PrivateRoute><Usuario /></PrivateRoute>}></Route>
                    </Fragment>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;