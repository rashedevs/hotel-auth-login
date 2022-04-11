import React from 'react';

const Register = () => {
    const handleRegSubmit = e => {
        e.preventDefault()
    }
    return (

        <form onSubmit={handleRegSubmit} style={{ margin: "30px" }}>
            <input type="text" name="name" id="1" placeholder='Name' />
            <br />
            <input type="email" name="mail" id="2" placeholder='Email' />
            <br />
            <input type="password" name="pass" id="3" placeholder='Password' />
            <br />
            <button type="submit">Register</button>
        </form>

    );
};

export default Register;