function fetchProducts() {
    fetch('https://6662ac4162966e20ef097175.mockapi.io/api/products/products')
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById('productsContainer');
        productsContainer.innerHTML = '';
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.textContent = `${product.name} - $${product.price}`;
            productsContainer.appendChild(productDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });
}

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    fetch('https://6662ac4162966e20ef097175.mockapi.io/api/products/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: productName,
            price: productPrice
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Product added successfully:', data);
        fetchProducts();
        closePopup();
    })
    .catch(error => {
        console.error('Error adding product:', error);
    });
}

function showPopup() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'flex';
}

function closePopup() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
});
