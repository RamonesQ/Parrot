import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom'
import { api, loginApi } from '../services/api'


export const AuthContext = createContext('');

export const AuthProvider = ({ children }: {children: JSX.Element}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        const token = localStorage.getItem('token')


        if (recoveredUser && token) {
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setLoading(false);
    }, []);

    const login = async (email: string, senha: string) => {
        const response = await loginApi(email, senha);


        const loggerUser = response.data.user;
        const token = response.data.token;


        localStorage.setItem('user', JSON.stringify(loggerUser));
        localStorage.setItem('token', token);


        api.defaults.headers.Authorization = `Bearer ${token}`;


        setUser(loggerUser);
        navigate('/');

    }

    const logout = () => {
        console.log('logout');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/login')
    };

    return (
        <AuthContext.Provider value={{
            authenticated: !!user,
            user,
            loading,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}