import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    if (user) { navigate(from, { replace: true }) }

    const handleUserLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleUserLogin} style={{ margin: "30px" }}>
                <input onBlur={handleEmail} type="email" name="email" id="1" placeholder='Email' required />
                <br />
                <input onBlur={handlePassword} type="password" name="password" id="2" placeholder='Password' required />
                <br />
                <p>{error?.message}</p>
                <p>{loading && 'Loading...'}</p>
                <br />
                <input className='submit' type="submit" value="Login" />
            </form>
        </div>

    );
};

export default Login;