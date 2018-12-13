new Vue({
	el: "#app",
	data: {
		total: 0.00,
		cart:[],
		products: [{
				title: "Product One",
				id: 1,
				price: 10
			},
			{
				title: "Product Two",
				id: 2,
				price: 11
			},
			{
				title: "Product Three",
				id: 3,
				price: 5
			}
		]
	},
	methods: {
		addToCart: function(product) {
			this.total += product.price;
			var found = false;
			for (var i = 0; i < this.cart.length; i++) {
				if (this.cart[i].id === product.id) {
					found = true;
					this.cart[i].qty++;
				}
			}
			if (!found) {
				this.cart.push({
					id: product.id,
					title: product.title,
					price: product.price,
					qty: 1
				});
			}
		},
		inc:function (item) {
			item.qty ++;
			this.total+=item.price;
		},
		dec:function (item) {
			item.qty --;
			this.total-=item.price;
			if (item.qty<=0) {
			var i = this.cart.indexOf(item);
			this.cart.splice(i,1);
			}
			
		}
	},
	filters:{
		currency:function (price) {
							return "$".concat(price.toFixed(2));
						}
}
});