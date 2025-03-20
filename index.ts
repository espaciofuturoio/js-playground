type ID = string | number;

type Product = {
	id: ID;
	name: string;
	description: string;
	price: number;
};

type CartProduct = Product & { amount: number };

const products: Record<string, Product> = {
	A: {
		id: "A",
		name: "shoes",
		description: "amazing shoes",
		price: 100,
	},
	B: {
		id: "B",
		name: "t-shirt",
		description: "amazing t-shirt",
		price: 50,
	},
};

class ShoppingCart {
	shoppingList = new Map<ID, CartProduct>();
	addProduct(productId: ID) {
		const product = products[productId];
		if (!product) throw new Error("Product do not exist");
		if (this.shoppingList.has(productId)) {
			const product = this.shoppingList.get(productId);
			this.shoppingList.set(productId, {
				...product,
				amount: product?.amount + 1,
			});
		} else {
			this.shoppingList.set(productId, { ...products[productId], amount: 1 });
		}
	}
	removeProduct(productId: ID) {
		this.shoppingList.delete(productId);
	}
	getTotal() {
		return this.shoppingList
			.values()
			.toArray()
			.reduce((acc, product) => {
				return acc + product.amount * product.price;
			}, 0);
	}
	listProducts() {
		return this.shoppingList.values().toArray();
	}
}

const myShoppingCart = new ShoppingCart();

myShoppingCart.addProduct("A");
console.log(myShoppingCart.listProducts());
console.log(myShoppingCart.getTotal());
myShoppingCart.addProduct("A");
console.log(myShoppingCart.listProducts());
console.log(myShoppingCart.getTotal());
myShoppingCart.removeProduct("A");
console.log(myShoppingCart.listProducts());
myShoppingCart.removeProduct("A");
myShoppingCart.removeProduct("A");
console.log(myShoppingCart.listProducts());
myShoppingCart.addProduct("A");
myShoppingCart.addProduct("B");
myShoppingCart.addProduct("B");
console.log(myShoppingCart.listProducts());
console.log(myShoppingCart.getTotal());
