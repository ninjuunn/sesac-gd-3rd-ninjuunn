function displayProduct(products) {
    const productListEl = document.querySelector('#product-list');
    productListEl.innerHTML = ''; //상품 목록 초기화 

    products.forEach((product) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="${product.image}" alt="${product.name}"/>
        <p>상품 이름 "${product.name}, 가격 : ${product.price}원 </p>
    `;

    productListEl.append(div);
    });
} 

// 

function fetchProducts() {
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
            displayProduct(data);
        })
        .catch((err) => console.log('djfjf'))
}
