const API_URL = "https://script.google.com/macros/s/AKfycbySgwsc4ewsPrkj0t-vIaGTwcHhetg0QFiIfuznfC5wW6SG0MWJufESCXEqR8hx0w6y/exec";

const form = document.getElementById("sellForm");

if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
      sellerName: document.getElementById("sellerName").value,
      whatsapp: document.getElementById("whatsapp").value,
      uid: document.getElementById("uid").value,
      level: document.getElementById("level").value,
      rank: document.getElementById("rank").value,
      loginType: document.getElementById("loginType").value,
      price: document.getElementById("price").value,
      screenshot: document.getElementById("screenshot").value
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Your Free Fire ID has been submitted successfully!");
        form.reset();
      } else {
        alert("❌ Failed to submit.");
      }

    } catch (error) {
      alert("❌ Error: " + error.message);
    }
  });
}
