function productItems(product) {
    if (product === 'product1') {
        createProduct('K. Accessories');
        priceCalculate(39.00);
    } else if (product === 'product2') {
        createProduct('Kitchen cleaner');
        priceCalculate(25.00);
    } else if (product === 'product3') {
        createProduct('K. Accessories');
        priceCalculate(49.00);
    } else if (product === 'product4') {
        createProduct('Sports Back Cap');
        priceCalculate(49.00);
    } else if (product === 'product5') {
        createProduct('Full Jersey Set');
        priceCalculate(69.00);
    } else if (product === 'product6') {
        createProduct('Sports cates');
        priceCalculate(159.00);
    } else if (product === 'product7') {
        createProduct('Single Relax Chair');
        priceCalculate(185.00);
    } else if (product === 'product8') {
        createProduct('Children play');
        priceCalculate(299.00);
    } else if (product === 'product9') {
        createProduct('Flexible Sofa');
        priceCalculate(339.00);
    }

}

function createProduct(items) {
    const ol = document.getElementById('buy-now');
    const li = document.createElement('li');
    li.innerText = items;
    li.setAttribute('class', 'work-sans text-2xl font-medium text-[#111]');
    ol.appendChild(li);
}

function priceCalculate(price) {
    purchaseButton(price)
    const totalPrice = document.getElementById('total-price');
    const discount = document.getElementById('discount');
    const total = document.getElementById('total');
    const discountButton = document.getElementById('discount-button');
    const couponCode = document.getElementById('coupon-code')

    totalPrice.innerText = parseInt(totalPrice.innerText) + price;
    total.innerText = totalPrice.innerText;

    if (parseInt(totalPrice.innerText) >= 200) {
        discountButton.removeAttribute('disabled')
    }
    discountButton .addEventListener('click', () => {
        if(couponCode.value === 'SELL200'){
            discount.innerText = totalPrice.innerText * 20 / 100
            total.innerText = totalPrice.innerText - discount.innerText
            couponCode.value = '';
        }
    })
}


function purchaseButton(total){
    const purchase = document.getElementById('make-purchase')
    if(total > 0){
        purchase.removeAttribute('disabled')
    }
}

function goHome(){
    window.location.href = 'http://127.0.0.1:5500/index.html';
}