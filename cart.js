const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - Rp ${item.price.toLocaleString()}
            <button onclick="removeItem(${index})">Hapus</button>
        `;
        cartItemsContainer.appendChild(li);
    });

    totalPriceElement.textContent = `Total: Rp ${total.toLocaleString()}`;
}

function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();
