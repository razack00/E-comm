
const productsContainer = document.querySelector(".products")

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML - filteredProducts.map(
        (product) => `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src=${product.image} alt="ps5">
        </div>
        <div class="card-content">
            <h2>${product.name}</h2>
            <p>${product.category}</p>
            <i>${product.price}</i><br>
            <button>Add to Cart</button>
        </div>
    </div>`
    ).join("")
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products)
} )