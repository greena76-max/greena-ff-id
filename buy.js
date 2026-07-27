const products = document.getElementById("products");

const demoData = [

{
image:"https://via.placeholder.com/350x200?text=Free+Fire+ID",
uid:"123456789",
level:"80",
rank:"Heroic",
price:"Rs. 5000",
status:"Available",
whatsapp:"923001234567"
},

{
image:"https://via.placeholder.com/350x200?text=Free+Fire+ID",
uid:"987654321",
level:"72",
rank:"Master",
price:"Rs. 3500",
status:"Available",
whatsapp:"923111111111"
}

];

function showCards(data){

products.innerHTML="";

data.forEach(item=>{

products.innerHTML += `

<div class="card">

<img src="${item.image}" alt="Free Fire ID">

<div class="info">

<h2>UID : ${item.uid}</h2>

<p>⭐ Level : ${item.level}</p>

<p>🏆 Rank : ${item.rank}</p>

<p>💰 ${item.price}</p>

<p class="status">${item.status}</p>

<a class="buybtn"
href="https://wa.me/${item.whatsapp}"
target="_blank">

💬 Buy Now

</a>

</div>

</div>

`;

});

}

showCards(demoData);
