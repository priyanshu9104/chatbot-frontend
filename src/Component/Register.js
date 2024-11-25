import React from 'react'
import { useState } from 'react';
import '../Cssfiles/register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const registering = async() => {
        setLoading(true);
        // console.log(phone, email, password);
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { 
                    email: email,
                    phone: phone,
                    password: password
            });

            setLoading(false);
            console.log(res.data.message);
            navigate('/login');
        } catch (error) {
            console.log(error.message);
            setLoading(false);
            setError(error.response.data.message);
        }
        

    }
    return (
        <>
            <div className="registercontainerbox">
                <div className="messagebox">
                    {loading && <div className="loading-message">Loading...</div>}
                    {error && <div className="error-message">{error}</div>}
                </div>
                <div className="registerbox">
                    <div className="firstbox">
                        <div className="ricon">
                            R
                        </div>
                    </div>
                    <div className="secondbox">
                        <h1>Register</h1>
                        <div className='formsection'>
                            <div className="labelbox">
                                <label htmlFor="username">Phone:</label>
                                <input type="tel"
                                    className='username'
                                    name='username'
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="123-45-678" 
                                    required
                                />
                            </div>
                            <div className="labelbox">
                                <label htmlFor="email">Email:</label>
                                <input type="email"
                                    className='email'
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="labelbox">
                                <label htmlFor="password">Password:</label>
                                <input type="password"
                                    className='password'
                                    name='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Password'
                                    required
                                />
                            </div>
                            <button onClick={registering} className='registerbutton' type="submit">Register</button>
                        </div>
                        <div className="paraline">
                            <p>Already have an account? <Link to={"/login"}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
