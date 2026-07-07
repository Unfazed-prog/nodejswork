import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate(); // Make sure the variable name is lowercase (common practice)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(""); // Used for error or success messages

    const handleLogin = async () => {
        // Clear previous response message
        setResponse("");

        // Basic validation
        if (username === "" || password === "") {
            setResponse("Please fill in both fields.");
            return;
        }

        try {
            // Send POST request to the backend for login
            const response = await axios.post("http://localhost:8080/forLogin", { USERNAME: username, PASSWORD: password });

            // Handle successful login
            if (response.data === "Success") {
                navigate("/books");
            } 
            // Admin login check
            else if (username === "admin" && password === "1234") {
                navigate("/manage");
            } else {
                // Invalid credentials
                setResponse("Invalid username or password.");
            }
        } catch (error) {
            console.log(error);
            setResponse("There was an error. Please try again later.");
        }
    }

    return (
        <div className="container p-4 bg-light rounded">
            <h2 style={{ color: 'black' }}>Login</h2>
            <p style={{ color: 'black' }}>Enter your username and password</p>

            <div className="mb-3" style={{ color: 'black' }}>
                <label className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="mb-3" style={{ color: 'black' }}>
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {/* Displaying error or success message */}
            {response && <div className="alert alert-danger">{response}</div>}

            <button onClick={handleLogin} className="btn btn-primary">
                Login
            </button>

            <div className="mt-3">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </div>
    );
}

export default Login;
