import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      backgroundColor: "#f7d6df",
      borderBottom: "1px solid #ccc",
      fontFamily: "Segoe UI"
    },
    logo: {
      fontSize: "1.6rem",
      fontWeight: "bold",
      color: "#b66c85",
      textDecoration: "none"
    },
    navList: {
      display: "flex",
      gap: "25px",
      listStyle: "none"
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontSize: "1rem"
    }
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>Hijabi Central</Link>

      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/products" style={styles.link}>Products</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>

      <Link to="/cart" style={styles.link}>🛒</Link>
    </nav>
  );
};

export default Navbar;