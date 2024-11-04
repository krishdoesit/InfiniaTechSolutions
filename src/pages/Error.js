// ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // Optional: for styling if you want a separate CSS file

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.errorCode}>404</div>
      <div style={styles.message}>Oops! Page Not Found</div>
      <div style={styles.description}>
        The page you are looking for might have been removed, or its name might have changed.
      </div>
      <Link to="/" style={styles.homeLink}>Go Back to Homepage</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f3f4f6',
    color: '#333'
  },
  errorCode: {
    fontSize: '6em',
    fontWeight: 'bold',
    color: '#ff6b6b',
    marginBottom: '20px'
  },
  message: {
    fontSize: '1.5em',
    color: '#4a5568',
    marginBottom: '20px'
  },
  description: {
    fontSize: '1em',
    color: '#718096',
    marginBottom: '30px'
  },
  homeLink: {
    padding: '10px 20px',
    backgroundColor: '#3182ce',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1em',
    transition: 'background-color 0.3s ease',
  },
};

export default ErrorPage;
