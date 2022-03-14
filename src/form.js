import React, { useState } from "react";

export default function Form() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((firstName === '' || lastName === '') || (email === '' || password === '')) {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h1>User {firstName} {lastName} successfully registered!!</h1>
          </div>
        );
      };

    const errorMessage = () => {
        return (
            <div className="error" style={{display: error ? '' : 'none',}}>
                <p>Please enter all the fields</p>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h2>Form Register</h2>
            </div>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <form>
                <label>First Name: </label>
                <input onChange={handleFirstName} className="input" value={firstName} type="text" />

                <label>Last Name: </label>
                <input onChange={handleLastName} className="input" value={lastName} type="text" />

                <label>Email Address: </label>
                <input onChange={handleEmail} className="input" value={email} type="email" />

                <label>Password: </label>
                <input onChange={handlePassword} className="input" value={password} type="password" />

                <button className="btn" onClick={handleSubmit} type="submit">Create</button>
            </form> 
        </div>
    );

}