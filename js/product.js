const itemImg = document.getElementsByClassName('item__img')[0];
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const colorSelection = document.getElementById('colors');
const addToCartBtn = document.getElementById('addToCart');
const quantity = document.getElementById('quantity');
let theProduct;
let cart = JSON.parse(localStorage.getItem('cart')) || {items: []};

function renderProduct(product) {
	theProduct = product;
	const imgElement = document.createElement('img');
	imgElement.src = product.imageUrl;
	imgElement.alt = product.altTxt;
	title.textContent = product.name;
	price.textContent = product.price;
	description.textContent = product.description;
	itemImg.appendChild(imgElement);
	product.colors.forEach(color => {
		const option = document.createElement('option');
		option.value = color;
		option.textContent = color;
		colorSelection.appendChild(option);
	})
}

function addItemToCart() {
	theProduct.colorChoice = colorSelection.value;
	theProduct.quantity = quantity.value;
	cart.items.push(theProduct);
	localStorage.setItem('cart', JSON.stringify(cart));
}

async function getOneProduct() {
	await fetch('api/products/' + window.location.pathname)
		.then(res => res.json())
		.then(data => { renderProduct(data) })
		.catch(err => { console.log(err) })
};

addToCartBtn.addEventListener('click', addItemToCart);
window.addEventListener('load', getOneProduct);