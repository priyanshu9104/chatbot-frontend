import React, { useState } from 'react';
import axios from 'axios';
import '../Cssfiles/ForgotPassword.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  // const [isRequestAllowed, setIsRequestAllowed] = useState(true);

  const navigate = useNavigate();

  const handleForgotPassword = async() => {
    setLoading(true);
    const res = await axios.post('http://localhost:5000/api/auth/forgot-password', {emailOrPhone: emailOrPhone});
    // console.log(res);
    // setIsRequestAllowed(true)
    if (res.data.error) {
      setError(res.data.error);
      setSuccess('');
      setLoading(false);
      
    } else {
      setError('');
      setSuccess(res.data.message);
      setLoading(false);
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    }

  }
  return (
    <>
      <div className="forgetcontainerbox">
        <div className="messagebox">
          {loading && <div className="loading-message">Loading...</div>}
          {success && <div className="success-message">{success}</div>}
          {error && <div className="error-message">{error}</div>}
        </div>
        <div className="forgetpassbox">
          <h2>Forgot Password</h2>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="text"
              placeholder="Enter your email or phone"
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className='emailorphone'
            />
          </div>
          <p className="warning">You can only request a reset once per day.</p>
          <button onClick={handleForgotPassword}>Reset Password</button>
        </div>
        {/* {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>} */}
        {/* {!isRequestAllowed && (
          <p className="warning">You can only request a reset once per day.</p>
        )} */}
      </div>
    </>
  )
}

export default ForgotPassword






// import React, { useState, useEffect } from "react";
// import "../Cssfiles/ForgotPassword.css";

// const generateRandomPassword = () => {
//   const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let password = "";
//   for (let i = 0; i < 8; i++) {
//     password += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return password;
// };

// const ForgotPassword = () => {
//   const [emailOrPhone, setEmailOrPhone] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isRequestAllowed, setIsRequestAllowed] = useState(true);

//   useEffect(() => {
//     const lastRequest = localStorage.getItem("lastForgotPasswordRequest");
//     if (lastRequest) {
//       const timeElapsed = Date.now() - parseInt(lastRequest, 10);
//       const oneDay = 24 * 60 * 60 * 1000;
//       if (timeElapsed < oneDay) {
//         setIsRequestAllowed(false);
//       }
//     }
//   }, []);

//   const handleForgotPassword = () => {
//     if (!emailOrPhone) {
//       setError("Please enter your email or phone number.");
//       setSuccess("");
//       return;
//     }

//     if (!isRequestAllowed) {
//       setError("You can only request a password reset once per day.");
//       setSuccess("");
//       return;
//     }

//     const newPassword = generateRandomPassword();
//     localStorage.setItem("lastForgotPasswordRequest", Date.now().toString());
//     setSuccess(`Password reset successful! Your new password is: ${newPassword}`);
//     setError("");
//     setIsRequestAllowed(false);
//   };

//   return (
//     <div className="forgot-password-container">
//       <h2>Forgot Password</h2>
//       <div className="input-container">
//         <label>Email or Phone:</label>
//         <input
//           type="text"
//           value={emailOrPhone}
//           onChange={(e) => setEmailOrPhone(e.target.value)}
//           placeholder="Enter your email or phone"
//         />
//       </div>
//       {error && <div className="error-message">{error}</div>}
//       {success && <div className="success-message">{success}</div>}
//       <button onClick={handleForgotPassword} disabled={!isRequestAllowed}>
//         Reset Password
//       </button>
//       {!isRequestAllowed && (
//         <p className="warning">You can only request a reset once per day.</p>
//       )}
//     </div>
//   );
// };

// export default ForgotPassword;
