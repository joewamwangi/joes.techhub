const products = [
    { id: 1, name: 'Gaming Laptop', price: 1500 },
    { id: 2, name: 'Office Desktop', price: 800 },
    { id: 3, name: 'Wireless Mouse', price: 20 },
];

const cart = [];
let total = 0;

function displayProducts() {
    const productsDiv = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

document.getElementById('checkout').addEventListener('click', () => {
    alert(`Total amount to pay: $${total}`);
});

displayProducts();
