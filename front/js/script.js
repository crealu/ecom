const items = document.getElementById('items');

function appendProductElement(product) {
	const a = document.createElement('a');
	a.href = './' + product._id;
	
	const article = document.createElement('article');

	const img = document.createElement('img');
	img.src = product.imageUrl;
	img.alt = product.altTxt;

	const h3 = document.createElement('h3');
	h3.textContent = product.name;
	h3.classList.add('productName');

	const p = document.createElement('p');
	p.textContent = product.description;
	p.classList.add('productDescription');

	article.appendChild(img);
	article.appendChild(h3);
	article.appendChild(p);
	a.appendChild(article);
	items.appendChild(a);
}

function renderProducts(products) {
	products.forEach(product => {
		appendProductElement(product);
	})
}

async function getProducts() {
	await fetch('/api/products')
		.then(res => res.json())
		.then(data => {
			console.log(data);
			renderProducts(data);
		})
		.catch(err => { console.log(err) })
};

window.addEventListener('load', getProducts);