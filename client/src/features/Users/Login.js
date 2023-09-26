import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { loginSuccess, loginFailure } from './actions';

function Login({ loginSuccess, loginFailure, currentUser, error, history }) {
//   const [displaySignUpForm, setDisplaySignUpForm] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const { email, password } = formData;


//   function handleSubmit(e) {
//     e.preventDefault();
//     const userData = {
//       email,
//       password,
//     };

//     fetch('/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(userData),
//     })
//       .then((r) => {
//         if (r.ok) {
//           r.json().then((user) => {
//             loginSuccess(user); // Dispatch success action
//             history.push(`/cards`);
//           });
//         } else {
//           r.json().then((data) => loginFailure(data.error)); // Dispatch failure action
//         }
//       });
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   function handleSignupClick() {
//     setDisplaySignUpForm(!displaySignUpForm);
//   }

  return (
    <div id="login_div">
      {/* <div style={{ textAlign: 'center' }}>
      </div>
      <h1 style={{ textAlign: 'center' }}>Please Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
      <br />
      <br />
      <button id="signup-button" onClick={handleSignupClick}>
        Sign Up
      </button>
      <br />
      {/* {displaySignUpForm ? <SignUpForm /> : null} */}
      {/* {errors ? <div style={{ color: 'red' }}>{errors}</div> : null} */} */}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   currentUser: state.currentUser,
//   error: state.error,
// });

// Connect the component to the Redux store and map actions to props
export default Login
// connect(mapStateToProps, { loginSuccess, loginFailure })(Login);
