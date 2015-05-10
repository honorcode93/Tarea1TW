var React = require('react');

function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
	  val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	}
	return val;
}

//This is the static item list
var ItemList = React.createClass({
	add : function( item ){
    	this.props.add(item);
  	},
	
	render: function() {
		var items = this.props.items.map(function (item, index) {
			return (<li className="item-list-item" key={index}>
						<div>
							<h3 className="product-title">{item['name']}</h3>
							<div className="price">${commaSeparateNumber(item['price'])}</div>
						</div>
						<div className="clearfix"></div>
						<div className="item-desc">
							{item['desc']}
						</div>
						<button className="btn" onClick={this.add.bind(null, item)}> <div className="ion-ios-cart"> <b>AÑADIR AL CARRITO: ${commaSeparateNumber(item.price)} </b></div></button>
					</li>);
		}.bind(this));
		return(
			<div className="item-list">
				<h1>Productos</h1>
				<ul>
				{items}
				</ul>
			</div>
		);
	}
});

module.exports = ItemList;