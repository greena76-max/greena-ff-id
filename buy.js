const API_URL = "https://script.google.com/macros/s/AKfycbySgwsc4ewsPrkj0t-vIaGTwcHhetg0QFiIfuznfC5wW6SG0MWJufESCXEqR8hx0w6y/exec";

const products = document.getElementById("products");
const search = document.getElementById("search");

let allData = [];

async function loadData() {
  try {

    const response = await fetch(API_URL);
    const data = await response.json();

    allData = data;

    displayCards(allData);

  } catch (err) {

    products.innerHTML =
      "<h2 style='text-align:center;color:red'>Failed to Load Data</h2>";

  }
}

function displayCards(data) {

  products.innerHTML = "";

  data.forEach(item => {

    if (item.status !== "Available") return;

    products.innerHTML += `

<div class="card">

<img src="${item.screenshot}" onerror="this.src='https://via.placeholder.com/400x220?text=No+Image'">

<div class="info">

<h2>UID : ${item.uid}</h2>

<p>⭐ Level : ${item.level}</p>

<p>🏆 Rank : ${item.rank}</p>

<p>🔐 Login : ${item.loginType}</p>

<p>💰 ${item.price}</p>

<p class="status">🟢 ${item.status}</p>

<a class="buybtn"
target="_blank"
href="https://wa.me/${item.whatsapp}?text=Hi, I want to buy your Free Fire ID (UID: ${item.uid})">

💬 Buy Now

</a>

</div>

</div>

`;

  });

}

search.addEventListener("keyup", function () {

  const value = this.value.toLowerCase();

  const filter = allData.filter(item =>
    item.uid.toLowerCase().includes(value) ||
    item.rank.toLowerCase().includes(value) ||
    item.level.toLowerCase().includes(value)
  );

  displayCards(filter);

});

loadData();
