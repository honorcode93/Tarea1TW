var React = require('react');

//This is the cart containing the current items a user has
var ShopCart = React.createClass({
	render: function() {
		var items = this.props.items.map(function (item, index) {
			return (
				<tr>
					<td>{item['name']}</td>
					<td>{item['price']}</td>
					<td>{item['qty']}</td>
					<td>{item['price']*item['qty']}</td>
				</tr>
			);
		});

		var total = 0;
		this.props.items.forEach(function(item, index){
			total += item['price'];
		});

		return(
			<div class="cart-list">
				<h1>Carrito</h1>
				<table>
					<tr>
						<th>Producto</th>
						<th>Precio</th>
						<th>Cantidad</th>
						<th>Subtotal</th>
						<th></th>
					</tr>
					{items}
				</table>
				<div class="total">Total: {total}</div>
			</div>
		);
	}
});


module.exports = ShopCart;
