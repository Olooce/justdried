// Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h4>About Us</h4>
          <p>Learn more about our company and mission.</p>
        </div>
        <div style={styles.section}>
          <h4>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h4>Follow Us</h4>
          <ul style={styles.socialMedia}>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div style={styles.copyRight}>
        <p>&copy; {currentYear} JustDried. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    position: 'relative',
    width: '100%',
    bottom: 0,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  section: {
    flex: 1,
    margin: '0 10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  socialMedia: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    gap: '10px',
  },
  copyRight: {
    textAlign: 'center',
    marginTop: '10px',
  },
};

export default Footer;
