import React from "react";
import PropTypes from "prop-types";
import Clock from "./Clock";

const seasonConfig = {
	Summer: {
		text: `Let's hit the Beach!!!`,
		iconName: `sun`
	},
	Winter: {
		text: `Brrrr it's Chlly!!`,
		iconName: `snowflake`
	}
};
console.log(seasonConfig.Summer.text);

const getSeason = (latitude, month) => {
	if (month > 2 && month < 9) {
		if (latitude > 0) {
			return `Summer`;
		} else {
			return `Winter`;
		}
	} else {
		if (latitude > 0) {
			return `Winter`;
		} else {
			return `Sumer`;
		}
	}
};

const SeasonDisplay = props => {
	let latitude = props.latitude;
	let month = new Date().getMonth();
	let season = getSeason(latitude, month);
	let text =
		season === `Winter`
			? `${seasonConfig.Winter.text}`
			: `${seasonConfig.Summer.text}`;
	let iconName =
		season === `Winter`
			? `${seasonConfig.Winter.text}`
			: `${seasonConfig.Summer.iconName}`;

	return (
		<div className="ui container cont">
			<i className={`fas fa-${iconName} icon-up`} />
			<div className="text-cont">{text}</div>
			<i className={`fas fa-${iconName} icon-down`} />
			<Clock />
		</div>
	);
};
export default SeasonDisplay;

SeasonDisplay.propTypes = {
	latitude: PropTypes.number
};
