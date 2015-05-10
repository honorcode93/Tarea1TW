var React = require('react');

function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
	  val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	}
	return val;
}

//This is the cart containing the current items a user has
var ShopCart = React.createClass({
	add : function( item ){
    	this.props.add(item);
  	},

  	sub : function( item ){
    	this.props.sub(item);
  	},

  	del : function( item ){
    	this.props.del(item);
  	},
	render: function() {
		var items = this.props.items.map(function (item, index) {
			return (
				<tr key={index}>
					<td className="product-name">
						<div className="car-buttons">
							<button className="icon ion-ios-plus-outline" onClick={this.add.bind(null, item)}></button>
							<button className="icon ion-ios-minus-outline" onClick={this.sub.bind(null, item)}></button>
							<button className="icon ion-ios-trash" onClick={this.del.bind(null, item)}></button>
						</div>
						<div>{item['name']}</div>
					</td>
					<td>${commaSeparateNumber(item['price'])}</td>
					<td>{item['qty']}</td>
					<td>${commaSeparateNumber(item['price']*item['qty'])}</td>
				</tr>
			);
		}.bind(this));

		var total = 0;
		this.props.items.forEach(function(item, index){
			total += item['price']*item['qty'];
		});

		return(
			<div className="cart-list">
				<h1><div className="ion-ios-cart"> Carrito </div></h1>
				<table>
					<tr>
						<th className="product-name">Producto</th>
						<th>Precio</th>
						<th>Cantidad</th>
						<th>Subtotal</th>
						<th></th>
					</tr>
					{items}
					<td></td>
					<td></td>
					<td><b>Total:</b></td>
					<td>${commaSeparateNumber(total)}</td>
				</table>
				
				<button className="checkout">

					<div className="checkout-icon ion-card">  	CHECKOUT!</div>
				</button>
			</div>
		);
	}
});


module.exports = ShopCart;
