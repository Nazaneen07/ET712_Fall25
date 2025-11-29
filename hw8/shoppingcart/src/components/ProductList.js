import React from 'react';
import '../App.css'


// Ghibli-themed items
import soot from '../images/soot.png'
import totoro from '../images/totoro.png'
import calcifer from '../images/calcifer.png'


const products = [
{id: 1, name: "Soot Sprite Candy", price: 3, image: soot},
{id: 2, name: "Totoro Mochi", price: 5, image: totoro},
{id: 3, name: "Calcifer Spicy Chips", price: 4, image: calcifer},
]


const ProductList = ({addToCart})=>{


return(
<section>
<h2 className='producttitle'>Ghibli Treats</h2>


<div className='cardcontainer'>
{products.map((product)=>(
<div key={product.id} className='card'>
<img src={product.image}/>
<p className='productname'>{product.name}</p>
<p className='productprice'>${product.price}</p>


<button className='btn_addcart' onClick={()=>addToCart(product)}>
Add to Cart
</button>
</div>
))}
</div>
</section>
)
}


export default ProductList;