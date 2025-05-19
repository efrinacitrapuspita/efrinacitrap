const products = [
    {
        id: 1,
        name: "Kue Lilin",
        price: 75000,
        image: "kue1.jpg" 
    },
    {
        id: 2,
        name: "Kue Stroberry",
        price: 74000,
        image: "kue2.jpg" 
    },
    {
        id: 3,
        name: "Kue Cerry",
        price: 76000,
        image: "kue3.jpg"
    },
    {
        id: 4,
        name: "Kue Blue Skay",
        price: 78000,
        image: "kue4.jpg" 
    }
  ];
  
  // Simpan keranjang di localStorage
  function getCart() {
    
    
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : [];
    }
    
    function saveCart(cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    // Tambah produk ke keranjang
    function addToCart(productId) {
      let cart = getCart();
      const product = products.find(p => p.id === productId);
      if (!product) return;
    
      const existing = cart.find(item => item.id === productId);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({...product, quantity: 1});
      }
      saveCart(cart);
      alert(`${product.name} berhasil ditambahkan ke keranjang!`);
      updateCartCount();
    }
    
    // Update jumlah item di menu (jika ada)
    function updateCartCount() {
        const cartCountElem = document.getElementById("cart-count");
        if (!cartCountElem) return;
        const cart = getCart();
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElem.textContent = totalCount;
      }
      
      // Tampilkan produk di halaman shop
      function displayProducts() {
        const container = document.getElementById("products");
        if (!container) return;
      
        container.innerHTML = "";
        products.forEach(product => {
          const card = document.createElement("div");
          card.className = "product-card";
          card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>Rp ${product.price.toLocaleString("id-ID")}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
          `;
          container.appendChild(card);
        });
    }          