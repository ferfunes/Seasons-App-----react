import React from "react";
import SeasonDisplay from "./SeasonDisplay.js";
import Clock from "./Clock";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			lat: null,
			error: ""
		};
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ lat: position.coords.latitude });
			},
			err => {
				this.setState({ error: err.message });
			}
		);
	}

	render() {
		let latitude = this.state.lat;
		let errorMessage = this.state.error;

		if (errorMessage && !latitude) {
			return (
				<div
					style={{ color: "white", backgroundColor: "red" }}
					className="ui container">
					ERROOOOR! {errorMessage}
				</div>
			);
		} else if (latitude && !errorMessage) {
			return (
				<div>
					<SeasonDisplay latitude={latitude} />
				</div>
			);
		} else {
			return <h1>Loading...</h1>;
		}
	}
}
