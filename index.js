async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products=data.products;
    console.log(products);
    const result = products.map(function (product) {
        return `<div class="product">
        <img src="${product.thumbnail}"/>
        <h2> product id: ${product.id}</h2>
        <h4>${product.title}</h4>
        </div>
        `;
    });
    document.querySelector(".products").innerHTML = result.join("");
}
getProducts();