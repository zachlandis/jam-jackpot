import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './UsersSlice';
import { Navigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const errors = useSelector((state) => state.users.errors);
  const dispatch = useDispatch();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
    
    setEmail('');
    setPassword('');

    <Navigate to="/" />;
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="mb-3">
                <input
                  className="form-control"
                  type="password"
                  name="password"
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
      </div>
    </div>
  );
};

export default Login;