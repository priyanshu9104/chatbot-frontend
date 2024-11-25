import React, { useState } from 'react';
import '../Cssfiles/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const loginhandle = async()=>{
        // console.log(email,password);
        setLoading(true);
        try {
            const data = await axios.post("http://localhost:5000/api/auth/login",{
                email: email,
                password: password
              }
              );
        setLoading(false);
        console.log(data.data.message);
        localStorage.setItem('isLogin',data.data.token);
        navigate('/');
        } catch (error) {
            console.log(error.response.data.message);
            setLoading(false);
            setError(error.response.data.message);
        }
    }
    return (
        <>
            <div className="logincontainer">
                <div className="massagesbox">
                    {loading && <div className="loading-message">Loading...</div>}
                    {error && <div className="error-message">{error}</div>}
                </div>
                <div className="loginbox">
                    <div className="firstbox">
                        <div className="licon">
                            L
                        </div>
                    </div>
                    <div className="secondbox">
                        <h1>Login</h1>
                        <div className='formsection'>
                            <div className="labelbox">
                                <label htmlFor="username">UserName:</label>
                                <input type="text" className='username' value={email} name='username' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required />
                            </div>
                            <div className="labelbox">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className='password' value={password} name='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required />
                            </div>
                            <button className='loginbtn' onClick={loginhandle} type="submit">Login</button>
                        </div>
                        <div className="paraline">
                            <p>New Account Create <Link to={"/register"}>Register</Link></p>
                            <p><Link to={"/forgetpassword"}>Forget Password</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
