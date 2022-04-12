import React, { useState } from 'react';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const handleName = e => {
        setName(e.target.value)
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

    }
    return (

        <div className="form-container">
            <form onSubmit={handleCreateUser} style={{ margin: "30px" }}>
                <input onBlur={handleName} type="text" name="name" id="1" placeholder='Name' required />
                <br />
                <input onBlur={handleEmail} type="email" name="mail" id="2" placeholder='Email' required />
                <br />
                <input onBlur={handlePassword} type="password" name="pass" id="3" placeholder='Password' required />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>

    );
};

export default Register;