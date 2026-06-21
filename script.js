fetch("/products")
.then(res=>res.json())
.then(data=>{

const productsDiv=document.getElementById("products");

data.forEach(product=>{

productsDiv.innerHTML+=`
<div class="product">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button>Add to Cart</button>
</div>
`;

});

});
