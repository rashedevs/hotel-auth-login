import React, { useState } from 'react';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate('/inventory')
    }

    const handleCreateUser = e => {
        e.preventDefault()

        createUserWithEmailAndPassword(email, password)

        if (password !== confirmPassword) {
            return;
        }

    }
    return (

        <div className="form-container">
            <form onSubmit={handleCreateUser} style={{ margin: "30px" }}>
                <input onBlur={handleEmail} type="email" name="mail" id="1" placeholder='Email' required />
                <br />
                <input onBlur={handlePassword} type="password" name="pass" id="2" placeholder='Password' required />
                <br />
                <input onBlur={handleConfirmPassword} type="password" name="confirm pass" id="3" placeholder='Confirm Password' required />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>

    );
};

export default Register;