import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/inventory'>Inventory</Link>
            <Link to='/register'>Register</Link>
            {
                user ? <button onClick={() => signOut(auth)}>Signout</button> :
                    <Link to='/login'>Login</Link>
            }
        </nav>
    );
};

export default Header;