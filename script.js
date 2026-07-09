function placeOrder(){

if(cart.length===0){
alert("Your cart is empty!");
return;
}

document.body.innerHTML = `
<div style="
text-align:center;
padding:100px;
font-family:Arial;
">
<h1 style="color:green;">✅ Order Placed Successfully!</h1>

<h2>Thank You For Shopping With TechMart</h2>

<p>Your order has been confirmed.</p>

<a href="index.html">
<button style="
padding:12px 20px;
background:#2874f0;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
">
Continue Shopping
</button>
</a>

</div>
`;

localStorage.removeItem("cart");
}