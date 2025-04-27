import React from 'react';
import Taskbar from '../components/taskbar';

const Projects = () => {
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
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: '20px',
    maxHeight: '90%',
    overflowY: 'auto',
    animation: 'fadeIn 1s ease',
    boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
  };

  const imageWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const projectImageStyle = {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '20px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
    transition: 'transform 0.5s ease, box-shadow 0.5s ease',
  };

  const sectionContainerStyle = {
    marginBottom: '80px',
    animation: 'slideUpFade 1s ease',
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

  const dividerStyle = {
    height: '2px',
    backgroundColor: '#00bcd4',
    width: '90%',
    margin: '10px auto 30px',
    animation: 'expand 1s ease',
  };

  const descriptionStyle = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#ddd',
    marginBottom: '20px',
    marginLeft: '30px',
    marginRight: '30px',
    textAlign: 'justify',
    animation: 'fadeSlide 1s ease',
  };

  const linkStyle = {
    fontSize: '18px',
    color: '#00bcd4',
    textDecoration: 'underline',
    fontWeight: 'bold',
  };

  const listStyle = {
    marginLeft: '50px',
    marginBottom: '20px',
    color: '#ccc',
    fontSize: '17px',
    textAlign: 'left',
    listStyleType: 'disc',
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
        {/* BITWIKI SECTION */}
        <div style={sectionContainerStyle}>
          <div style={imageWrapperStyle}>
            <img
              src="/images/bitwiki.jpeg"
              alt="BITwiki Project"
              style={projectImageStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <h1 style={sectionTitleStyle}>BITwiki Project</h1>
          <div style={dividerStyle}></div>
          <p style={descriptionStyle}>
            <strong>BITwiki</strong> is a decentralized knowledge repository that leverages blockchain technology for secure and transparent content management. It empowers users to collaboratively create, edit, and curate information across various topics.
          </p>
          <ul style={listStyle}>
            <li><strong>Decentralization:</strong> No single entity controls content, promoting fairness.</li>
            <li><strong>User Engagement:</strong> Encourages community contributions and revisions.</li>
            <li><strong>Blockchain Integration:</strong> Ensures data integrity and security.</li>
            <li><strong>Community Governance:</strong> Users can vote on content changes.</li>
          </ul>
          <p style={descriptionStyle}><strong>My Roles:</strong></p>
          <ul style={listStyle}>
            <li><strong>UI Designer:</strong> Designed intuitive and user-friendly interfaces for BITwiki's platform.</li>
            <li><strong>Community Manager:</strong> Fostered engagement and moderated user contributions.</li>
            <li><strong>Technical Researcher:</strong> Conducted in-depth research to ensure accuracy and relevance of platform content.</li>
          </ul>
          <a
            href="https://bitwiki.org/wiki/Main_Page"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...linkStyle, marginLeft: '30px' }}
          >
            Visit BITwiki
          </a>
        </div>

        {/* GAME DEV SECTION */}
        <div style={sectionContainerStyle}>
          <h1 style={sectionTitleStyle}>Game Development Experience</h1>
          <div style={dividerStyle}></div>


          {/* QUALITY ASSURANCE */}
          <div style={imageWrapperStyle}>
            <img
              src="/images/qa.png"
              alt="Quality Assurance"
              style={projectImageStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <h2 style={sectionTitleStyle}>Quality Assurance</h2>
          <p style={descriptionStyle}>As a QA Specialist, I focused on ensuring game quality through systematic testing and evaluation:</p>
          <ul style={listStyle}>
            <li>Conducted extensive playtesting to identify bugs, glitches, and balance issues.</li>
            <li>Tracked, documented, and prioritized bug reports during development cycles.</li>
            <li>Provided actionable feedback on gameplay flow, mechanics, and difficulty levels.</li>
            <li>Ensured final product met high quality standards and seamless user experience expectations.</li>
          </ul>
          <div style={dividerStyle}></div>


          {/* ROBLOX GAME DEV */}
          <div style={imageWrapperStyle}>
            <img
              src="/images/roblox.png"
              alt="Roblox Developer"
              style={projectImageStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <h2 style={sectionTitleStyle}>Roblox Game Developer</h2>
          <ul style={listStyle}>
            <li>Developed a business museum game accessible to kids and families to showcase client enterprises.</li>
            <li>Collaborated with clients and expanded involvement into Unity and Godot projects.</li>
          </ul>
          <div style={dividerStyle}></div>


          {/* UNITY GAME DEV */}
          <div style={imageWrapperStyle}>
            <img
              src="/images/unity.png"
              alt="Unity Developer"
              style={projectImageStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <h2 style={sectionTitleStyle}>Unity Game Developer</h2>
          <ul style={listStyle}>
            <li>Created interconnected 3D worlds: Love World, Art World, Music World linked through a central hub.</li>
            <li>Designed 3D models, assets, character animations, bots/NPCs, and interaction systems.</li>
            <li>Optimized world loading, player navigation, and immersive gameplay experiences.</li>
            <li>Explore project: <a href="https://magicworlds.itch.io/magic-world" target="_blank" rel="noopener noreferrer" style={linkStyle}>Magic Worlds</a></li>
          </ul>
          <div style={dividerStyle}></div>


          {/* GODOT GAME DEV */}
          <div style={imageWrapperStyle}>
            <img
              src="/images/godot.png"
              alt="Godot Developer"
              style={projectImageStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <h2 style={sectionTitleStyle}>Godot Game Developer</h2>
          <ul style={listStyle}>
            <li>Built diverse 2D/3D worlds aligned with Unity experiences including custom themes and characters.</li>
            <li>Developed assets, detailed animations, NPC behaviors, and engaging quest systems.</li>
            <li>Focus on collaborative design, optimizing experience across multiple game engines.</li>
            <li>Explore project: <a href="https://iamcapote.itch.io/maroon-lagoon" target="_blank" rel="noopener noreferrer" style={linkStyle}>Maroon Lagoon</a></li>
          </ul>
          <div style={dividerStyle}></div>

        </div>
      </div>
    </div>
  );
};

export default Projects;