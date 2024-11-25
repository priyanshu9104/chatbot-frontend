import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatbot from './Component/Chatbot.js';
import Home from './Component/Home';
import Login from './Component/Login.js';
import ForgotPassword from './Component/ForgotPassword.js';
import Register from './Component/Register.js';
import Navbar from './Component/Navbar.js';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgetpassword" element={<ForgotPassword/>} />
          {/* <Route path="/chatbot" element={<Chatbot/>} /> */}
        </Routes>
      </Router>
     <Chatbot/>
    </div>
    </>
  );
}

export default App;
