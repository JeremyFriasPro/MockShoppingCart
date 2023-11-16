const itemSection = document.getElementById("items");
const amountDisplay = document.getElementById("amount");

class Cart {
	constructor() {
		this.totalAmount = 0;
		this.cartArray = [];
		this.itemSection = itemSection;
		this.amountDisplay = amountDisplay;
		this.shoppingStorage = shoppingStorage;
		this.addProducts();
	}

	addProducts() {
		this.shoppingStorage.products.map((product) => {
			let productElement = document.createElement("div");
			productElement.classList.add("product");

			let sectionLeft = document.createElement("div");
			sectionLeft.id = "left";
			productElement.append(sectionLeft);

			let sectionRight = document.createElement("div");
			sectionRight.id = "right";
			productElement.append(sectionRight);

			let smallHeading = document.createElement("h5");
			smallHeading.innerText = product.name;
			sectionLeft.append(smallHeading);

			let smallImageDiv = document.createElement("div");
			smallImageDiv.style.width = "60px";
			smallImageDiv.style.height = "60px";
			smallImageDiv.style.borderRadius = "50%";
			smallImageDiv.style.backgroundImage = `url("${product.imageUrl}")`;
			smallImageDiv.style.backgroundSize = "cover";
			sectionLeft.append(smallImageDiv);

			let priceDisplay = document.createElement("span");
			priceDisplay.className = "price";
			priceDisplay.innerText = `$${product.price}`;
			sectionLeft.append(priceDisplay);

			let incBtn = document.createElement("button");
			incBtn.innerText = "+";
			let decBtn = document.createElement("button");
			decBtn.innerText = "-";
			incBtn.classList.add("btns");
			decBtn.classList.add("btns");

			let amount = 0;
			let quantity = document.createElement("div");
			quantity.innerText = amount;

			sectionRight.append(incBtn);
			sectionRight.append(quantity);
			sectionRight.append(decBtn);

			incBtn.addEventListener("click", (e) => {
				e.preventDefault();

				amount++;
				quantity.innerText = amount;

				this.increaseTotalAmount(product.price);
			});

			decBtn.addEventListener("click", (e) => {
				e.preventDefault();

				if (amount > 0) {
					amount--;
					quantity.innerText = amount;
					this.decreaseTotalAmount(product.price);
				}
			});

			this.itemSection.append(productElement);
		});
	}

	increaseTotalAmount(quantity) {
		this.totalAmount = parseFloat((this.totalAmount + quantity).toFixed(2));
		this.updateAmountDisplay();
	}

	decreaseTotalAmount(quantity) {
		this.totalAmount = parseFloat((this.totalAmount - quantity).toFixed(2));
		this.updateAmountDisplay();
	}

	updateAmountDisplay() {
		this.amountDisplay.innerText = this.totalAmount;
	}
}

const shoppingStorage = {
	products: [
		{
			id: 1,
			name: "MK Watch",
			price: 399.99,
			imageUrl: "./imgs/Product 1.jpg",
		},
		{
			id: 2,
			name: "Leather Croc Shoes",
			price: 249.99,
			imageUrl: "./imgs/Product 2.jpg",
		},
		{
			id: 3,
			name: "Wellington 390x",
			price: 389.99,
			imageUrl: "./imgs/Product 3.jpg",
		},
		{
			id: 4,
			name: "A/M Point Wallet",
			price: 49.99,
			imageUrl: "./imgs/Product 4.jpg",
		},
		{
			id: 5,
			name: "Timex Watch",
			price: 179.99,
			imageUrl: "./imgs/Product 5.jpg",
		},
	],
};

const spCart = new Cart();
