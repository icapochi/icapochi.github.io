import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, Paper, Link as MuiLink, AppBar, Toolbar } from '@mui/material';
import './App.css';
import resumeData from './components/ResumeDetails/Resume';

const Header = () => {
  const { name, tagline } = resumeData;

  return (
    <Paper elevation={3} className="header" style={{ backgroundColor: '#007bff', padding: '20px', marginBottom: '20px', textAlign: 'center', color: '#fff' }}>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="subtitle1">{tagline}</Typography>
    </Paper>
  );
};

const Footer = () => {
  const { contact } = resumeData;

  if (!contact) {
    return null;
  }

  return (
    <Paper elevation={3} className="footer" style={{ position: 'fixed', bottom: '0', left: '0', right: '0', backgroundColor: '#007bff', padding: '20px', textAlign: 'center', color: '#fff' }}>
      <Typography variant="body1">
        <strong>Contact:</strong> {contact.address} | {contact.phone} | {contact.email} |{' '}
        <MuiLink href={contact.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          GitHub
        </MuiLink>
      </Typography>
    </Paper>
  );
};

const SectionPage = ({ sectionTitle, content }) => (
  <Paper elevation={3} className="section" style={{ backgroundColor: '#f8f9fa', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
    <Typography variant="h6">{sectionTitle}</Typography>
    {content.map((item, index) => (
      <div key={index} className="section-item" style={{ marginBottom: '15px' }}>
        <Typography variant="subtitle1" style={{ color: '#007bff' }}>{item.name}</Typography>
        <Typography style={{ color: '#555' }}>{item.role || item.degree}</Typography>
        <Typography style={{ color: '#555' }}>{item.date}</Typography>
        <Typography style={{ color: '#555' }}>{item.description || item.details}</Typography>
      </div>
    ))}
  </Paper>
);

const TechnicalSkillsPage = () => {
  const { technicalSkills } = resumeData;

  return (
    <Paper elevation={3} className="section" style={{ backgroundColor: '#f8f9fa', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
      <Typography variant="h6" style={{ color: '#333' }}>Technical Skills</Typography>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {technicalSkills.map((skill, index) => (
          <li key={index} style={{ padding: '5px 0', borderBottom: '1px solid #ddd', color: '#555' }}>{skill}</li>
        ))}
      </ul>
    </Paper>
  );
};

const ExtracurricularsPage = () => {
  const extracurriculars = [
    ...resumeData.extracurricular.map((item) => ({ ...item, type: 'Extracurricular' })),
    ...resumeData.projects.map((item) => ({ ...item, type: 'Project' })),
    ...resumeData.competitions.map((item) => ({ ...item, type: 'Competition' })),
  ];

  return (
    <Paper elevation={3} className="extracurriculars" style={{ backgroundColor: '#f8f9fa', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
      <Typography variant="h6" style={{ color: '#333' }}>Extracurriculars</Typography>
      {extracurriculars.map((item, index) => (
        <div key={index} className="section-item" style={{ marginBottom: '15px' }}>
          <Typography variant="subtitle1" style={{ color: '#007bff' }}>{item.type}</Typography>
          <Typography variant="h6" style={{ color: '#333' }}>{item.name}</Typography>
          <Typography style={{ color: '#555' }}>{item.role || item.degree}</Typography>
          <Typography style={{ color: '#555' }}>{item.date}</Typography>
          <Typography style={{ color: '#555' }}>{item.description || item.details}</Typography>
        </div>
      ))}
    </Paper>
  );
};

const Home = () => {
  const { aboutMe, specialInterests } = resumeData;

  return (
    <div>
      <Paper elevation={3} className="home-content" style={{ backgroundColor: '#f8f9fa', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
        <Typography variant="body1" style={{ color: '#555' }}>
          <strong>About Me:</strong> {aboutMe}
        </Typography>
        <Typography variant="body1" style={{ color: '#555' }}>
          <strong>Special Interests:</strong> {specialInterests}
        </Typography>
      </Paper>
      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar" style={{ backgroundColor: '#343a40' }}>
      <Toolbar>
        <Link to="/" className="navbar-link" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/education" className="navbar-link" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>Education</Link>
        <Link to="/technical-skills" className="navbar-link" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>Technical Skills</Link>
        <Link to="/experience" className="navbar-link" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>Experience</Link>
        <Link to="/extracurriculars" className="navbar-link" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>Extracurriculars</Link>
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<SectionPage sectionTitle="Education" content={resumeData.education} />} />
          <Route path="/technical-skills" element={<TechnicalSkillsPage />} />
          <Route path="/experience" element={<SectionPage sectionTitle="Experience" content={resumeData.experience} />} />
          <Route path="/extracurriculars" element={<ExtracurricularsPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
