import React from "react";

class Clock extends React.Component {
	constructor() {
		super();
		this.state = {
			time: ""
		};
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({ time: new Date().toLocaleTimeString() });
		}, 1000);
	}

	render() {
		return <div className="time">The current time is: {this.state.time}</div>;
	}
}

export default Clock;
