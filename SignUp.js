import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('Customer');
  const [date, setDate] = useState(new Date().toDateString());
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  const handleSignUp = async () => {
    if (username !== '' && password !== '' && confirmPassword !== '' && email !== '') {
      if (password === confirmPassword) {
        try {
          const data = { USERNAME: username, PASSWORD: password, EMAIL: email, TYPE: type, DATE: date };
          console.log(data);

          // Send POST request to the server
          const response = await axios.post('http://localhost:8080/forRegister', data);
          console.log(response);
          setSuccessMessage('Sign up successful!'); // Show success message
          setErrorMessage(''); // Clear any previous error messages

          // Redirect to another page upon successful signup (e.g., a dashboard or login page)
          navigate('/login'); // Redirect to login page or another route after successful sign-up

        } catch (error) {
          console.log(error);
          setErrorMessage('Error signing up, please try again.'); // Show error message on failure
          setSuccessMessage(''); // Clear any previous success messages
        }
      } else {
        setErrorMessage('Passwords do not match'); // Show password mismatch error
        setSuccessMessage(''); // Clear success message
      }
    } else {
      setErrorMessage('Please fill all the fields'); // Show error if any field is empty
      setSuccessMessage(''); // Clear success message
    }
  };

  return (
    <div className='container p-4 bg-light rounded'>
      <h2 style={{ color: 'black' }}>Sign Up</h2>
      <p style={{ color: 'black' }}>Create an account</p>

      <div className='mb-3' style={{ color: 'black' }}>
        <label className='form-label'>Email</label>
        <input
          type='email'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='mb-3' style={{ color: 'black' }}>
        <label className='form-label'>Username</label>
        <input
          type='text'
          className='form-control'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className='mb-3' style={{ color: 'black' }}>
        <label className='form-label'>Password</label>
        <input
          type='password'
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className='mb-3' style={{ color: 'black' }}>
        <label className='form-label'>Confirm Password</label>
        <input
          type='password'
          className='form-control'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
      {successMessage && <div className='alert alert-success'>{successMessage}</div>}

      <button onClick={handleSignUp} className='btn btn-primary'>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
