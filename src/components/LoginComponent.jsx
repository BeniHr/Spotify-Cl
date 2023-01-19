import React, { useState } from 'react';
import "./LoginComponent.css"


function LoginComponent({ Login, error }) {
    const [details, setDetails] = useState({
        name: '',
        email: '',
        password: '',
    });

    const submitHandler = (e) => {
        e.preventDefault();
        Login(details);
    };
    return (
        <form className='form' onSubmit={submitHandler}>
            <div className="form-inner">
                <h2 className='h2'>Login</h2>
                {error != '' ? <div className="error">{error}</div> : ''}
                <div className="form-group">
                    <label className='label' htmlFor="username">Username:</label>
                    <input
                        className='input'
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) =>
                            setDetails({ ...details, name: e.target.value })
                        }
                        value={details.name}></input>
                </div>
                <div className="form-group">
                    <label className='label' htmlFor="email">Email:</label>
                    <input
                    className='input'
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) =>
                            setDetails({ ...details, email: e.target.value })
                        }
                        value={details.email}></input>
                </div>
                <div className="form-group">
                    <label className='label' htmlFor="password">Password:</label>
                    <input
                    className='input'
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) =>
                            setDetails({ ...details, password: e.target.value })
                        }
                        value={details.password}></input>
                </div>
                <input className='input' type="submit" value="Login"></input>
            </div>
        </form>
    );
}

export default LoginComponent;