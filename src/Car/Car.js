import React, { Component } from 'react';
import './Car.css';

/**
 * Your task:
 * When the user chooses a color from the list,
 * you should change the element `Car-color` background color accordingly.
 */

class Car extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: ""
		};
	}

	selectColor(event) {
		this.setState({color: event.target.value});
	}

	render() {

		let color = this.state.color;
		switch(color){
			case 'red':
				color='red';
				break;
			case 'blue':
				color='blue';
				break;
			case 'yellow':
				color='yellow';
				break;
			case 'green':
				color='green';
			break;

		}

		return (
			<div>
				<h1>Choose a color for your car:</h1>
				<select onChange={this.selectColor.bind(this)}>
					<option value='silver'>silver</option>
					<option value='red'>red</option>
					<option value='blue'>blue</option>
					<option value='yellow'>yellow</option>
					<option value='green' >green</option>
				</select>
				<br />
				<br />
				<div className={color}>Color example</div>
			</div>
		);
	}
}

export default Car;