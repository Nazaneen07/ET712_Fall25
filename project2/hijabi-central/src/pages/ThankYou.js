import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div style={{textAlign:'center', padding:'4rem', fontFamily:'Segoe UI, sans-serif'}}>
      <h1 style={{fontSize:'2.5rem', marginBottom:'1.5rem', color:'#6b8e6b'}}>🎉 Thank You for Your Purchase!</h1>
      <p style={{fontSize:'1.2rem', marginBottom:'2rem'}}>
        We appreciate your order and hope you enjoy your new hijab! 
        If you have any questions, feel free to contact us.
      </p>
      <Link to="/" style={{padding:'0.8rem 1.5rem', background:'#6b8e6b', color:'#fff', textDecoration:'none', borderRadius:'5px'}}>
        ← Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYou;
