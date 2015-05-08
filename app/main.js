// Aqui su majestuoso codigo React
var React = require('react');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {my_var: 3, my_var2: 4}
	},

	render:function(){
		return (
			<h1>Hola</h1>
		)
	}
});

React.render(<TodoApp />, document.getElementById('bind_on_me_yo'));
