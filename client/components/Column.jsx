/*
    ./client/components/Game.jsx
*/
import React from 'react';
import GameCell from '../components/GameCell.jsx';

export default class Column extends React.Component {
	constructor(props) {
		super();
	}
	
  	render() {
    	return (
			<div className={"gameColumn"}>    		
				{this.props.column.map(function(value, i, arr) {
					let index = arr.length - 1 - i;
					return (<GameCell key={index} cell={arr[index]} />);
				})}
			</div>
		);
  	}
}