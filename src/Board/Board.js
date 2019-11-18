import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle1: true,
			toggle2: true,
			toggle3: true
		}
	}


	changeColor1 = () => {
		this.setState({
			toggle1:  !this.state.toggle1
		});
	}

	changeColor2 = () => {
		this.setState({
			toggle2:  !this.state.toggle2
		});
	}

	changeColor3 = () => {
		this.setState({
			toggle3:  !this.state.toggle3
		});
	}



	render() {

		let colorOne  = this.state.toggle1  ? 'Board-option' : 'Board-option2';
		let colorTwo = this.state.toggle2  ? 'Board-option' : 'Board-option2';
		let colorThree= this.state.toggle3  ? 'Board-option' : 'Board-option2';

		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards" >
					<div className={colorOne} onClick={this.changeColor1.bind(this)}>1</div>
					<div className={colorTwo} onClick={this.changeColor2.bind(this)}>2</div>
					<div className={colorThree} onClick={this.changeColor3.bind(this)}>3</div>
				</div>
			</div>
		);
	}
}

export default Board;