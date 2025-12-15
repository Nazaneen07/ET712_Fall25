import React from 'react';
import { Link } from 'react-router-dom';
import parallaxImg from '../images/parallax-hijab.jpeg';

const Home = () => {
  return (
    <div>
      <section style={{
        backgroundImage: `url(${parallaxImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '10rem 1rem',
        textAlign: 'center',
        color: '#fff'
      }}>
        <h1 style={{fontSize:'3rem', marginBottom:'1rem'}}>Welcome to Hijabi Central</h1>
        <p style={{fontSize:'1.2rem', marginBottom:'1.5rem'}}>Stylish Hijabs & Accessories for Every Occasion</p>
        <Link to="/products" style={{
          padding:'0.8rem 1.8rem',
          background:'#6b8e6b',
          color:'#fff',
          textDecoration:'none',
          borderRadius:'5px'
        }}>Shop Now</Link>
      </section>

      <section style={{maxWidth:'900px', margin:'3rem auto', textAlign:'center', padding:'0 1rem'}}>
        <h2 style={{marginBottom:'1rem'}}>Our Mission</h2>
        <p style={{color:'#444', lineHeight:'1.8'}}>
          At Hijabi Central, we bring you hijabs that combine elegance, comfort, and modern style.
          Our goal is to provide high-quality fabrics and designs for women who love to express their style while staying modest.
        </p>
      </section>
    </div>
  );
};

export default Home;
