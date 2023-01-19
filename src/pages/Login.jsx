import SpotifyBanner from '../components/SpotifyBanner';
import TriangleBanner from '../components/Triangle-banner';
import { useState } from 'react';
import LoginComponent from '../components/LoginComponent'; 
import React from 'react';
import { Navigate } from 'react-router';

function Login() {
    const adminUser = {
        email: 'hreniucbenii@gmail.com',
        password: 'hreniucbeni',
    };

    const [user, setUser] = useState({ name: '', email: '' });
    const [error, setError] = useState('');

    const Login = (details) => {
        console.log(details);

        if (
            details.email === adminUser.email &&
            details.password === adminUser.password
        ) {
            console.log('Logged in');
            setUser({
                name: details.name,
                email: details.email,
            });
        } else {
            console.log('No details found!');
            setError('No details found!')
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
        <div className="LoginPage">    
             <SpotifyBanner />
             <TriangleBanner />
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