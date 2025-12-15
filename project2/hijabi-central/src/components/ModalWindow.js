import React from 'react';

const ModalWindow = ({ product, closeModal }) => {
  return (
    <div style={styles.overlay} onClick={closeModal}>
      <div style={styles.modal} onClick={(e)=>e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={closeModal}>X</button>
        <img src={product.image} alt={product.name} style={{width:'100%', borderRadius:'8px'}} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {product.features && (
          <ul>
            {product.features.map((f,i)=><li key={i}>{f}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: { position:'fixed', top:0, left:0, width:'100%', height:'100%', background:'rgba(0,0,0,0.5)', display:'flex', justifyContent:'center', alignItems:'center', zIndex:1000 },
  modal: { background:'#fff', padding:'20px', borderRadius:'10px', width:'90%', maxWidth:'500px', maxHeight:'90%', overflowY:'auto', position:'relative' },
  closeBtn: { position:'absolute', top:'10px', right:'10px', background:'red', color:'#fff', border:'none', borderRadius:'50%', width:'25px', height:'25px', cursor:'pointer' },
};

export default ModalWindow;
