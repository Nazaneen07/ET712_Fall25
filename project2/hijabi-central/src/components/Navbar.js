import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>Hijabi Central ᥫ᭡.</Link>

      <ul style={styles.linksList}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/products" className="nav-link">Products</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>

      <div style={styles.cartWrapper}>
        <Link to="/cart" style={styles.cartIcon}>
          🛒
          {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 40px',
    backgroundColor: '#d5e8d4',
    fontFamily: 'Segoe UI, sans-serif',
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#6b8e6b',
    textDecoration: 'none',
  },
  linksList: {
    display: 'flex',
    listStyle: 'none',
    gap: '25px',
    margin: 0,
    padding: 0,
  },
  cartWrapper: {
    position: 'relative',
  },
  cartIcon: {
    fontSize: '1.4rem',
    textDecoration: 'none',
    color: '#333',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-10px',
    backgroundColor: '#a1887f',
    color: '#fff',
    borderRadius: '50%',
    padding: '3px 7px',
    fontSize: '0.7rem',
  },
};

export default Navbar;
