import React from 'react';
import Taskbar from '../components/taskbar';

const About = () => {
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

  const sectionTitleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#00bcd4',
  };

  const textStyle = {
    fontSize: '18px',
    color: '#ddd',
    lineHeight: '1.8',
    margin: '20px 40px',
    textAlign: 'justify',
  };

  return (
    <div style={containerStyle}>
      <Taskbar />
      <div style={contentStyle}>
        <h1 style={sectionTitleStyle}>About Me</h1>

        <p style={textStyle}><strong>Name:</strong> Juliana Lledo</p>
        <p style={textStyle}><strong>Senior High School:</strong> PHINMA University of Pangasinan (High Honors)</p>
        <p style={textStyle}><strong>Strand:</strong> STEM - Science, Technology, Engineering, and Mathematics</p>
        <p style={textStyle}><strong>Tertiary Education:</strong> BS Computer Engineering, PHINMA University of Pangasinan</p>


        <p style={textStyle}>
          I am passionate about technology, innovation, and development. With a strong foundation in both theoretical and practical aspects of computer engineering, I actively pursue excellence in software development, artificial intelligence, and game development. 
          I have experience working on projects involving real-time sign language translation using YOLO and Transformer-based models, game creation using Roblox Studio, Unity, and Godot Engine, and UI/UX design.
        </p>

        <p style={textStyle}>
          I am detail-oriented, organized, and highly motivated to continuously learn new skills. I also excel in collaborative environments, value effective communication, and always aim to deliver projects that create meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default About;