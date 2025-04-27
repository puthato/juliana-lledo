import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Taskbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const taskbarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: isHovered ? '240px' : '80px',
    backgroundColor: '#1a1a1a',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center the icons vertically
    transition: 'width 0.3s ease',
    overflow: 'hidden',
    zIndex: 1000,
    paddingTop: '20px',
  };

  const iconWrapperStyle = {
    position: 'relative',
    margin: '20px 0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    width: '60px',
    height: '60px',
  };

  const labelStyle = {
    marginLeft: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '8px 15px',
    borderRadius: '5px',
    whiteSpace: 'nowrap',
    fontSize: '16px',
    display: isHovered ? 'block' : 'none',
  };

  const links = [
    { path: '/', icon: '/images/home.jpeg', label: 'Home' },
    { path: '/projects', icon: '/images/projects.jpeg', label: 'Projects/Experience' },
    { path: '/certifications', icon: '/images/certs.jpeg', label: 'Certifications' },
    { path: '/about', icon: '/images/about.jpeg', label: 'About Me' },
    { path: '/contact', icon: '/images/contact.jpeg', label: 'Contact' },
  ];

  return (
    <div
      style={taskbarStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {links.map((item) => (
        <Link key={item.label} to={item.path} style={{ textDecoration: 'none', width: '100%' }}>
          <div style={iconWrapperStyle}>
            <img src={item.icon} alt={item.label} style={iconStyle} />
            <div style={labelStyle}>{item.label}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Taskbar;