var React = require('react');

//This is the static item list
var ItemList = React.createClass({
	add : function( item ){
    	this.props.add(item);
  	},
	
	render: function() {
		var items = this.props.items.map(function (item, index) {
			return (<li key={index}>
						<h1>{item['name']} </h1>
						<div class="price">{item['price']}</div>
						{item['desc']}
						<button onClick={this.add.bind(null, item)}> AÑADIR AL CARRITO: {item.price} </button>
					</li>);
		}.bind(this));
		return(
			<div class="item-list">
				<ul>
				{items}
				</ul>
			</div>
		);
	}
});

module.exports = ItemList;