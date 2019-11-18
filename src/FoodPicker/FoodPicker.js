import React, { Component } from 'react';
import './FoodPicker.css';

class FoodPicker extends Component {
	constructor(props){
		super(props);
		this.state = {
			userName:'',
			favoriteMeal:'',
			desert: false,
			restaurantName: '',
		}
	}

	desertHandler() {
		this.setState(state => ({
			desert: !this.state.desert
		}));
	}

	changeNameHandler = (event) => {
		this.setState({userName: event.target.value});
	}

	FavoriteMeal = (event) => {
		this.setState({favoriteMeal: event.target.value});
	}

	selectRest(event) {
		this.setState({restaurantName: event.target.value});
	}


	render() {

		const slr  =  this.state.desert ? '' : 'sent';

		return (
			<div>
				<h1>Order special meal:</h1>
				<label>
					Your Name
					<input onKeyUp={this.changeNameHandler.bind(this)} type="text" />
				</label>
				<div>
					Choose restaurant:
					<select onChange={this.selectRest.bind(this)}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input type="text" onKeyUp={this.FavoriteMeal.bind(this)}/>
				</div>
				<div>
					Want a desert?
					<input type="checkbox" onClick={this.desertHandler.bind(this)}/>

				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.userName} <br />
					We are glad you want to reserve a table at: {this.state.restaurantName} <br />
					We will make sure that your favorite meal,{this.state.favoriteMeal} is available.<br />
					<span className= {slr} > Additionally, our chef will make a special desert for you </span> <br />
				</div>
			</div>
		);
	}
}

export default FoodPicker;

