const men = document.getElementById('Men');
const women = document.getElementById('Women');
const kids = document.getElementById('Kids');
const cardsContainer = document.getElementById('cardsContainer');
const url = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';
const percentageCalculator = (given, total) => {
    const percentage = Math.round((given / total) * 100);
    return percentage;
}
const initialState = () => {
    women.classList.remove('nav-tab-highlight');
    kids.classList.remove('nav-tab-highlight');
    men.classList.add('nav-tab-highlight');
    fetch(url, {
        method: 'GET', headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        return res.json();
    }).then((jsonData) => {
        const reqProductsData = jsonData;
        cardsContainer.innerHTML = '';
        reqProductsData.categories.forEach((categories) => {
            if (categories.category_name === 'Men') {
                categories.category_products
                    .forEach((products) => {
                        cardsContainer.innerHTML += `<div class="card" id='${products.id}'>
                            <img class="card-image" src='${products.image}' alt="card-image" />
                            ${products.badge_text ? ` <div class="badge">${products.badge_text}</div>` : ''}
                            <div>
                                <div class="content">
                                <ul>
                                        <li class="title">${products.title}</li>
                                        <li class="vendor">${products.vendor}</li>
                                    </ul>
                                </div>
                                <ul class="price-content">
                                    <li class="price">Rs&nbsp;${products.price}</li>
                                    <li class="compare-at-price">${products.compare_at_price}</li>
                                    <li class="offer">${percentageCalculator(products.price, products.compare_at_price)}&percnt;Off</li>
                                </ul>
                            </div>
                            <button>Add to cart</button>
                        </div>`;
                    })
            }
        })

    });
}
initialState();
men.addEventListener('click', (event) => {
    const target = event.target;
    women.classList.remove('nav-tab-highlight');
    kids.classList.remove('nav-tab-highlight');
    men.classList.add('nav-tab-highlight');
    fetch(url, {
        method: 'GET', headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        return res.json();
    }).then((jsonData) => {
        const reqProductsData = jsonData;
        cardsContainer.innerHTML = '';
        reqProductsData.categories.forEach((categories) => {
            if (categories.category_name === target.id) {
                categories.category_products
                    .forEach((products) => {
                        cardsContainer.innerHTML += `<div class="card" id='${products.id}'>
                            <img class="card-image" src='${products.image}' alt="card-image" />
                            ${products.badge_text ? ` <div class="badge">${products.badge_text}</div>` : ''}
                            <div>
                                <div class="content">
                                <ul>
                                        <li class="title">${products.title}</li>
                                        <li class="vendor">${products.vendor}</li>
                                    </ul>
                                </div>
                                <ul class="price-content">
                                    <li class="price">Rs&nbsp;${products.price}</li>
                                    <li class="compare-at-price">${products.compare_at_price}</li>
                                    <li class="offer">${percentageCalculator(products.price, products.compare_at_price)}&percnt;Off</li>
                                </ul>
                            </div>
                            <button>Add to cart</button>
                        </div>`;
                    })
            }
        })

    });

})
women.addEventListener('click', (event) => {
    const target = event.target;
    women.classList.add('nav-tab-highlight')
    kids.classList.remove('nav-tab-highlight')
    men.classList.remove('nav-tab-highlight')
    fetch(url, {
        method: 'GET', headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        return res.json();
    }).then((jsonData) => {
        const reqProductsData = jsonData;
        cardsContainer.innerHTML = '';
        reqProductsData.categories.forEach((categories) => {
            if (categories.category_name === target.id) {
                categories.category_products
                    .forEach((products) => {
                        cardsContainer.innerHTML += `<div class="card" id='${products.id}'>
                            <img class="card-image" src='${products.image}' alt="card-image" />
                            ${products.badge_text ? ` <div class="badge">${products.badge_text}</div>` : ''}
                            <div>
                                <div class="content">
                                    <ul>
                                        <li class="title">${products.title}</li>
                                        <li class="vendor">${products.vendor}</li>
                                    </ul>
                                </div>
                                <ul class="price-content">
                                    <li class="price">Rs&nbsp;${products.price}</li>
                                    <li class="compare-at-price">${products.compare_at_price}</li>
                                    <li class="offer">${percentageCalculator(products.price, products.compare_at_price)}&percnt;Off</li>
                                </ul>
                            </div>
                            <button>Add to cart</button>
                        </div>`;
                    })
            }
        })

    });

})
kids.addEventListener('click', (event) => {
    const target = event.target;
    women.classList.remove('nav-tab-highlight')
    kids.classList.add('nav-tab-highlight')
    men.classList.remove('nav-tab-highlight')
    fetch(url, {
        method: 'GET', headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        return res.json();
    }).then((jsonData) => {
        const reqProductsData = jsonData;
        cardsContainer.innerHTML = '';
        reqProductsData.categories.forEach((categories) => {
            if (categories.category_name === target.id) {
                categories.category_products
                    .forEach((products) => {
                        cardsContainer.innerHTML += `<div class="card" id='${products.id}'>
                            <img class="card-image" src='${products.image}' alt="card-image" />
                            ${products.badge_text ? ` <div class="badge">${products.badge_text}</div>` : ''}
                            <div>
                                <div class="content">
                                <ul>
                                        <li class="title">${products.title}</li>
                                        <li class="vendor">${products.vendor}</li>
                                    </ul>
                                </div>
                                <ul class="price-content">
                                    <li class="price">Rs&nbsp;${products.price}</li>
                                    <li class="compare-at-price">${products.compare_at_price}</li>
                                    <li class="offer">${percentageCalculator(products.price, products.compare_at_price)}&percnt;Off</li>
                                </ul>
                            </div>
                            <button>Add to cart</button>
                        </div>`;
                    })
            }
        })

    });

})






