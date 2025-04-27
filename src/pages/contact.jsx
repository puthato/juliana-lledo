import React from 'react';
import Taskbar from '../components/taskbar';

const Contact = () => {
  const containerStyle = {
    height: '100vh',
    background: "url('/images/bg%20(2).png') no-repeat center center fixed",
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Poppins, Arial, sans-serif',
  };

  const floatingHeaderStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 2000,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '6px 12px',
    borderRadius: '20px',
    boxShadow: '0 0 6px rgba(255, 255, 255, 0.2)',
  };

  const imageStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid white',
    marginRight: '10px',
  };

  const nameStyle = {
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'white',
    whiteSpace: 'nowrap',
  };

  const rightStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '20px',
    borderRadius: '10px',
    backdropFilter: 'blur(10px)',
  };

  const contactInfoStyle = {
    fontSize: '18px',
    color: '#CCCCCC',
    marginBottom: '10px',
  };

  const linkStyle = {
    color: '#00bcd4',
    textDecoration: 'underline',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      {/* Floating profile header */}
      <div style={floatingHeaderStyle}>
        <img src="/images/me.jpg" alt="Juliana Lledo" style={imageStyle} />
        <span style={nameStyle}>Engr. Juliana Lledo</span>
      </div>

      {/* Taskbar */}
      <Taskbar />

      {/* Right Side Content */}
      <div style={rightStyle}>
        <h1>Contact Information</h1>
        <p style={contactInfoStyle}>
          Email: <a href="mailto:julianlledo7@gmail.com" style={linkStyle}>julianlledo7@gmail.com</a>
        </p>
        <p style={contactInfoStyle}>
          Phone: +63 947 694 2275
        </p>
        <p style={contactInfoStyle}>
          LinkedIn: <a href="https://linkedin.com/in/julianlledo" target="_blank" rel="noopener noreferrer" style={linkStyle}>linkedin.com/in/julianlledo</a>
        </p>
        <p style={contactInfoStyle}>
          GitHub: <a href="https://github.com/puthato" target="_blank" rel="noopener noreferrer" style={linkStyle}>github.com/puthato</a>
        </p>
        <p style={contactInfoStyle}>
          Address: Dagupan City, Philippines
        </p>
      </div>
    </div>
  );
};

export default Contact;
