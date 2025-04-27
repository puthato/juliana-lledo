import React from 'react';
import Taskbar from '../components/taskbar';

const Home = () => {
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

  const imageWrapperStyle = {
    position: 'relative',
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
    marginBottom: '15px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const nameStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '5px',
    textDecoration: 'underline',
    textDecorationColor: '#007BFF',
  };

  const titleStyle = {
    fontSize: '20px',
    color: '#CCCCCC',
    marginBottom: '10px',
  };

  const taglineStyle = {
    fontSize: '16px',
    color: '#AAAAAA',
    fontStyle: 'italic',
    marginBottom: '20px',
    maxWidth: '800px',
  };

  return (
    <div style={containerStyle}>
      <Taskbar />
      <div style={rightStyle}>
        <div style={imageWrapperStyle}>
          <img src="/images/me.jpg" alt="Juliana Lledo" style={imageStyle} />
        </div>
        <div style={nameStyle}>Juliana Lledo</div>
        <div style={titleStyle}>Computer Engineer</div>
        <div style={taglineStyle}>
          I am a Computer Engineering graduate from PHINMA University of Pangasinan, with a strong specialization in Software Engineering and interactive technologies. I have hands-on experience in React for web development, as well as Unity and Godot engines for both 2D and 3D game development. My background includes designing responsive web interfaces and developing immersive, user-centered games and applications. Proficient in Python, C++, and C#, I am passionate about leveraging modern tools to build innovative, scalable solutions.
          <br /><br />
          I am currently seeking opportunities to gain professional experience, expand my portfolio, and further develop my skills. I am driven by a strong desire for continuous learning and aspire to contribute to impactful projects while growing as a developer and engineer.
        </div>
      </div>
    </div>
  );
};

export default Home;
