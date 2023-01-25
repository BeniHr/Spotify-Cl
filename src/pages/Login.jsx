import SpotifyBanner from '../components/SpotifyBanner';
import { useState } from 'react';
import LoginComponent from '../components/LoginComponent';
import React from 'react';
import { Navigate } from 'react-router-dom';
import adminUser from '../assets/constants';

function Login({ setAuth }) {
    const [user, setUser] = useState({ name: '', email: '' });
    const [error, setError] = useState('');
    const Login = (details) => {
        console.log(details);
        if (
            details.name === adminUser.name &&
            details.email === adminUser.email &&
            details.password === adminUser.password
        ) {
            console.log('Logged in');
            setAuth({ token: true });
            setUser({
                name: details.name,
                email: details.email,
            });
        } else {
            console.log('No details found!');
            setError('No details found!');
        }
    };

    const Logout = () => {
        console.log('Loggout');
        setUser({
            name: '',
            email: '',
        });
    };

    return (
        <div className="h-screen flex items-center justify-center bg-no-repeat  bg-gradient-to-br from-black to-[#270303]">
            <SpotifyBanner />
            {user.email !== '' ? (
                // <Link to='/src/pages/mainPage/MainPage.js'>asdasda</Link>
                <Navigate replace to="/"></Navigate>
            ) : (
                <LoginComponent Login={Login} error={error} />
            )}
        </div>
    );
}

export default Login;
