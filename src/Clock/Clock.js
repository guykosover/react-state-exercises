import React, { Component } from 'react';

class Clock extends Component {

	constructor(props) {
		super(props);
			this.state = {
			date: this.getTime()
		};
	}

	//set timer
	componentDidMount() {
			this.timer = setInterval(() => {
			this.setState({date: this.getTime()});
			console.log('hey');
		}, 1000);
	}


	//remove timer
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	//fetch time component
	getTime() {
		return new Date().toString();
	}

	render() {
		return (
			<div >
				<h1>Clock</h1>
				<span>The time is: {this.state.date}</span>
			</div>
		);
	}
}

export default Clock;