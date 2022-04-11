import React from 'react';

const Login = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit} style={{ margin: "30px" }}>
            <input type="email" name="email" id="1" placeholder='Email' />
            <br />
            <input type="password" name="password" id="2" placeholder='Password' />
            <br />
            <button type="submit">Login</button>
        </form>

    );
};

export default Login;