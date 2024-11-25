import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Cssfiles/navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem('isLogin');
    useEffect(() => {
        if (isLogin) {
            navigate('/');
        }
    },[isLogin,navigate])

    return (
        <div className='navbarbox'>
            <div className="navbar">
                <h3>Priyanshu</h3>
                <ul className="lists">
                    {isLogin ? <>
                        {/* <li className='list'><Link className='links' to={"/"}>Home</Link></li> */}
                        <li className='list'><button className='links' onClick={() => { localStorage.removeItem('isLogin'); navigate('/login') }}>Logout</button></li>
                    </> : <>
                        <li className='list'><Link className='links' to={"/login"}>Login</Link></li>
                        <li className='list'><Link className='links' to={"/register"}>Register</Link></li>
                    </>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
