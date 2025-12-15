import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h3 style={{color:'#6b8e6b'}}>🧕 Hijabi Central</h3>
          <p>Stylish hijabs & accessories for every occasion</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/products" style={styles.link}>Products</a></li>
            <li><a href="/cart" style={styles.link}>Cart</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>📍 NYC, USA</p>
          <p>📞 +1 234 567 890</p>
          <p>📧 info@hijabicentral.com</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p>© 2025 Hijabi Central | All Rights Reserved</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: { backgroundColor: '#a1887f', color: '#fff', padding: '3rem 2rem', fontSize: '0.9rem' },
  container: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap:'2rem', maxWidth:'1200px', margin:'0 auto' },
  list: { listStyle:'none', padding:0, margin:0 },
  link: { color:'#fff', textDecoration:'none' },
  bottom: { textAlign:'center', marginTop:'2rem', fontSize:'0.8rem' },
};

export default Footer;
