import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../redux/usersSlice'; // Import the signUpUser action

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.user.errors);

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      username,
    };

    // Dispatch the signUpUser action to send user registration data to the server
    dispatch(signUpUser(userData));
  };

  return (
    <div>
      {errors ? <div style={{ color: 'red' }}>{errors}</div> : null}
      <form className="signup-form" onSubmit={onSubmit}>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
