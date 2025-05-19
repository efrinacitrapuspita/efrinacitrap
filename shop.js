const products = [
    {
        name: "Kue Coklat",
        price: 35000,
        image: "images/coklat.jpg",
        description: "Kue coklat lembut dengan topping ganache."
    },
    {
        name: "Kue Keju",
        price: 40000,
        image: "images/keju.jpg",
        description: "Kue keju creamy dan lezat."
    },
    {
        name: "Kue Stroberi",
        price: 38000,
        image: "images/stroberi.jpg",
        description: "Kue stroberi segar dengan krim vanilla."
    }
];

const productContainer = document.getElementById("products");
const modal = document.getElementById("product-modal");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const modalAddToCart = document.getElementById("modal-add-to-cart");
const closeModal = document.querySelector(".close");

let selectedProduct = null;

products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" data-index="${index}">
        <h3>${product.name}</h3>
        <p>Rp ${product.price.toLocaleString()}</p>
        <button onclick="addToCart(${index})">Tambah ke Keranjang</button>
    `;
    card.querySelector("img").onclick = () => showModal(index);
    productContainer.appendChild(card);
});

function showModal(index) {
    selectedProduct = products[index];
    modalImage.src = selectedProduct.image;
    modalName.textContent = selectedProduct.name;
    modalDescription.textContent = selectedProduct.description;
    modalPrice.textContent = `Rp ${selectedProduct.price.toLocaleString()}`;
    modal.style.display = "block";
}

modalAddToCart.onclick = () => {
    if (selectedProduct) {
        addToCart(products.indexOf(selectedProduct));
        modal.style.display = "none";
    }
};

function addToCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(products[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${products[index].name} ditambahkan ke keranjang.`);
}

closeModal.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
