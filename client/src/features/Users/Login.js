import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './UsersSlice';
import { useNavigate } from 'react-router-dom';


function Login({ currentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const errors = useSelector((state) => state.users.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await dispatch(loginUser({ email, password }));

    console.log("From Login:", user)
    
    if (user) {
      
      navigate('/');
    }
    
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          {errors && <div>{errors.message}</div>}
        </div>
      </div>
    </div>
  );
}

export default Login;
