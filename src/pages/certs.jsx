import React from 'react';
import Taskbar from '../components/taskbar';

const Certs = () => {
  const containerStyle = {
    height: '100vh',
    background: "url('/images/bg%20(2).png') no-repeat center center fixed",
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Poppins, Arial, sans-serif',
  };

  const contentStyle = {
    marginLeft: '250px',
    width: 'calc(100% - 250px)',
    padding: '40px',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '20px',
    maxHeight: '90%',
    overflowY: 'auto',
    boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
    animation: 'fadeIn 1s ease',
  };

  const imageWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
  };

  const certImageStyle = {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
    transition: 'transform 0.5s ease, box-shadow 0.5s ease',
  };

  const sectionTitleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#00bcd4',
  };

  const certTitleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#00bcd4',
  };

  const dividerStyle = {
    height: '2px',
    backgroundColor: '#00bcd4',
    width: '90%',
    margin: '10px auto 30px',
    animation: 'expand 1s ease',
  };

  const descriptionStyle = {
    fontSize: '18px',
    color: '#ddd',
    marginBottom: '30px',
    marginLeft: '30px',
    marginRight: '30px',
    textAlign: 'justify',
    animation: 'fadeSlide 1s ease',
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.15)';
    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 188, 212, 0.7)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
  };

  return (
    <div style={containerStyle}>
      <Taskbar />
      <div style={contentStyle}>
        <h1 style={sectionTitleStyle}>Certificates</h1>

        {/* MATLAB Certificate */}
        <div style={imageWrapperStyle}>
          <img
            src="/images/matlab.jpeg"
            alt="MATLAB Certificate"
            style={certImageStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
        <h2 style={certTitleStyle}>MATLAB Certificate</h2>
        <div style={dividerStyle}></div>
        <p style={descriptionStyle}>MATLAB Certificate of Completion</p>

        {/* Basic Level Software Engineering */}
        <div style={imageWrapperStyle}>
          <img
            src="/images/basic.jpeg"
            alt="Basic Level Software Engineering"
            style={certImageStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
        <h2 style={certTitleStyle}>Basic Level of Software Engineering</h2>
        <div style={dividerStyle}></div>
        <p style={descriptionStyle}>DICT-ICT018 Basic Level of Software Engineering by the Department of Information and Communications Technology through the DICT LMS</p>

        {/* Intermediate Level Software Engineering */}
        <div style={imageWrapperStyle}>
          <img
            src="/images/intermediate.jpeg"
            alt="Intermediate Level Software Engineering"
            style={certImageStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
        <h2 style={certTitleStyle}>Intermediate Level of Software Engineering</h2>
        <div style={dividerStyle}></div>
        <p style={descriptionStyle}>DICT-ICT013 Intermediate Level of Software Engineering by the Department of Information and Communications Technology through the DICT LMS</p>

        {/* Advanced Level Software Engineering */}
        <div style={imageWrapperStyle}>
          <img
            src="/images/advanced.jpeg"
            alt="Advanced Level Software Engineering"
            style={certImageStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
        <h2 style={certTitleStyle}>Advanced Level of Software Engineering</h2>
        <div style={dividerStyle}></div>
        <p style={descriptionStyle}>DICT-ICT017 Advanced Level of Software Engineering by the Department of Information and Communications Technology through the DICT LMS</p>
      </div>
    </div>
  );
};

export default Certs;