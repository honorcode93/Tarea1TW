// Aqui su majestuoso codigo React
var React = require('react');
var ItemList = require('./list');
var ShopCart = require('./cart');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			itemList: [
				{
					id: 1,
					name: "Espada de Jon Snow",
					price: 100000,
					desc: "Replica de la espada de Jon Snow del a serie juego de tronos",
					pic: "missing.jpg"
				},
				{
					id: 2,
					name: "Espada de Arya Stark",
					price: 80000,
					desc: "Replica de la espada de Arya Stark del show juego de tronos",
					pic: "arya.jpg"
				}
			],
			cartList: []
		}
	},

	add: function(item){
		var cart = this.state.cartList;
		var pos = -1;
		//Buscar si esta en la lista
		cart.forEach( function(cart_item, index){
			if(cart_item['id'] == item['id'])
			{
				pos = index;
			}
		});

		if(pos == -1)
		{
			item['qty'] = 1;	
			cart.push(item);
		}
		else
		{
			cart[pos]['qty'] += 1;
		}

		this.setState({cartList: cart});
	},

	sub: function(item){
		var cart = this.state.cartList;
		var pos = -1;
		cart.forEach( function(cart_item, index){
			if(cart_item['id'] == item['id'])
			{
				pos = index;
			}
		});

		if(pos != -1)
		{
			cart[pos]['qty'] -= 1;
			if(cart[pos]['qty'] <= 0)
			{
				cart.splice(pos, 1);
			}
		}

		this.setState({cartList: cart});
	},

	del: function(item){
		var cart = this.state.cartList;
		var pos = -1;
		cart.forEach( function(cart_item, index){
			if(cart_item['id'] == item['id'])
			{
				pos = index;
			}
		});

		if(pos != -1)
		{
			cart.splice(pos, 1);
		}

		this.setState({cartList: cart});
	},

	render: function(){
		return(
			<div className="container">
				<ShopCart items={this.state.cartList} add = {this.add} sub = {this.sub} del = {this.del} />
				<ItemList items={this.state.itemList} add = {this.add} />
				<div className="clearfix"></div>
				
			</div>
		);
	}
});

React.render(<TodoApp />, document.getElementById('bind_on_me_yo'));
