import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import './Contact.css'; 
import Swal from 'sweetalert2';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertType] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Nama:', name);
    console.log('Email:', email);
    console.log('Pesan:', message);
  
    // Lakukan logika pengiriman pesan atau pemrosesan formulir di sini

  // Tampilkan SweetAlert2 setelah berhasil submit
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: 'Thank You for your Message',
  });

    // Kosongkan input setelah submit
    setName('');
    setEmail('');
    setMessage('');
  };

  const renderAlert = () => {
    switch (alertType) {
      case 'success':
        return <div className="alert success">Thank You for your Massage</div>;
      default:
        return null;
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {renderAlert()}
      <div className='footer2'>
      <Footer/>
      </div>
    </div>
  );
}

export default ContactUs;
