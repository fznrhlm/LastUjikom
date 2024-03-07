import React, { useState } from 'react';
import Swal from 'sweetalert2';

export const LoginPage = () => {
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Thank You for Register',
    });

    // Lakukan proses registrasi di sini

    // Setelah proses registrasi selesai
    setRegistrationComplete(true);
  };

  return (
    <div className="login">
      <span className="regisMember">Register Member</span>
      <form className="loginForm" autoComplete='off' onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter Your Username" />
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter Your Email" />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your Password" />
        <button className="loginButton" type="submit">Register</button>
      </form>
    </div>
  );
};
