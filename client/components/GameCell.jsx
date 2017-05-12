/*
    ./client/components/GameCell.jsx
*/
import React from 'react';

export default class GameCell extends React.Component {
	constructor(props) {
		super(props);
	}
	style() {
		return { backgroundColor: this.props.cell.alive ? "black" : "white" };
	}
	render() {
		return (<div className={"gameCell"} style={this.style()}></div>);
	}
}