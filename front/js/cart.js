const totalPrice = document.getElementById('totalPrice');

let cart = JSON.parse(localStorage.getItem('cart'));
let cartItems = document.getElementById('cart__items');
console.log(cart.items);

function printOne() {
	console.log(1)
}

// printOne();
function renderItem(product) {
	const article = document.createElement('article');
	article.setAttribute('data-id', product._id);
	article.setAttribute('data-color', product.colorChoice);

	const itemImg = document.createElement('div');
	itemImg.classList.add('cart__item__img');
	const img = document.createElement('img');
	img.src = product.imageUrl;
	img.alt = product.altTxt;
	itemImg.appendChild(img);

	const itemContent = document.createElement('div');
	itemContent.classList.add('cart__item__content');

	const itemContentDescription = document.createElement('div');
	itemContentDescription.classList.add('cart__item__content__description');
	const h2 = document.createElement('h2');
	h2.textContent = product.name;
	const pColor = document.createElement('p');
	pColor.textContent = product.colorChoice;	
	const pPrice = document.createElement('p');
	pPrice.textContent = product.price;

	itemContentDescription.appendChild(h2);
	itemContentDescription.appendChild(pColor);
	itemContentDescription.appendChild(pPrice);


	const itemContentSettings = document.createElement('div');
	itemContentSettings.classList.add('cart__item__content__settings');
	
	const settingsQuantity = document.createElement('div');
	settingsQuantity.classList.add('cart__item__content__settings__quantity');
	const pQuantity = document.createElement('p')
	pQuantity.textContent = 'Quantity : ';
	const quantityInput = document.createElement('input');
	quantityInput.classList.add('itemQuantity');
	quantityInput.value = product.quantity;
	quantityInput.type = 'number';
	settingsQuantity.appendChild(pQuantity);
	settingsQuantity.appendChild(quantityInput);

	const settingsDelete = document.createElement('div');
	settingsDelete.classList.add('cart__item__content__settings__delete');
	const pDelete = document.createElement('p');
	pDelete.textContent = 'Delete';
	pDelete.classList.add('deleteItem');
	settingsDelete.appendChild(pDelete);

	itemContentSettings.appendChild(settingsQuantity);
	itemContentSettings.appendChild(settingsDelete);

	itemContent.appendChild(itemContentDescription);
	itemContent.appendChild(itemContentSettings);

	article.appendChild(itemImg);
	article.appendChild(itemContent);

	cartItems.appendChild(article);
}

function handleDelete(event) {
	let prodCode = event.target.dataset.id;
	// isolate this product code so you can use it as
	// sorting criteria for updating it in the cart object
}

function listOrder() {
	let total = 0;
	cart.items.forEach(item => {
		renderItem(item);
		total += (item.price/100) * item.quantity;
	})
	totalPrice.textContent = total;
}

window.addEventListener('load', listOrder);