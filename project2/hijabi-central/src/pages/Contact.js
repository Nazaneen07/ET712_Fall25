import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({name:'', email:'', message:''});

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({name:'', email:'', message:''});
  };

  return (
    <div style={{maxWidth:'600px', margin:'3rem auto', padding:'0 1rem', fontFamily:'Segoe UI, sans-serif'}}>
      <h1 style={{marginBottom:'1rem'}}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required
          style={{padding:'0.5rem', borderRadius:'5px', border:'1px solid #ccc'}}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required
          style={{padding:'0.5rem', borderRadius:'5px', border:'1px solid #ccc'}}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required
          rows="5"
          style={{padding:'0.5rem', borderRadius:'5px', border:'1px solid #ccc'}}
        />
        <button type="submit" style={{padding:'0.75rem', background:'#6b8e6b', color:'#fff', border:'none', borderRadius:'5px', cursor:'pointer'}}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
