/*
    ./client/components/Game.jsx
*/
import React from 'react';
import Column from '../components/Column.jsx';
import Cell from '../components/Cell.jsx';
import Color from '../components/Color.jsx';


export default class Game extends React.Component {
	constructor(props) {
		super(props);

	    this.width = 40;
	    this.height = 40;
	    this.matrix = []
	    for (let x = 0; x < this.width; x++) {
    		let column = [];
    		for (let y = 0; y < this.height; y++) {
	        	let cell = new Cell(x, y,
        			props.setup.indexOf(`[${x - 3}, ${y - 3}]`) > -1 ||
        			props.setup.indexOf(`[${this.width - x - 4}, ${y - 3}]`) > -1 ||
        			props.setup.indexOf(`[${x - 3}, ${this.height - y - 4}]`) > -1 ||
        			props.setup.indexOf(`[${this.width - x - 4}, ${this.height - y - 4}]`) > -1,
        			new Color(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)));
	        	column.push(cell);
	      	}
	    	this.matrix.push(column);
	    }
	    this.gameSpeed = 500;
	    this.state = {
	      matrix: this.matrix,
	      paused: false
	    }
		this.startGameLoop(this.matrix);
	}

	updateGame() {
		if (!this.state.paused) {
			console.time("gameUpdate");
			let that = this;
			for (let x = 0; x < that.matrix.length; x++) {
				for (let y = 0; y < that.matrix[x].length; y++) {
					that.matrix[x][y].updateCell
					(function() {
						if (x > 0 && y > 0) {
							that.setNeighbours(x - 1, y - 1);
						}
						if (x == that.matrix.length - 1 && y !== 0) {
							that.setNeighbours(x, y - 1);
						}
						if (y == that.matrix[x].length - 1 && x !== 0) {
							that.setNeighbours(x - 1, y);
						}
						if (x == that.matrix.length - 1 && y == that.matrix[x].length - 1) {
							that.setNeighbours(x, y, true);
						}
					});
				}
			}
		}
	}

	setNeighbours(x , y, endOfCycle = false) {
		this.matrix[x][y].setNeighbours(this.getNeighbours(x, y));
		if (endOfCycle) {
			this.setState({ matrix: this.matrix });
			console.timeEnd("gameUpdate");
		}
	}

	getNeighbours(x, y) {
    	let up = y == this.matrix[0].length - 1,
    		down = y == 0,
    		left = x == 0,
    		right = x == this.matrix.length - 1,
    		nc = [];
			if ( !down && this.matrix[x][y - 1].alive)
				nc.push(this.matrix[x][y - 1]);
			if ( !down && !left && this.matrix[x - 1][y - 1].alive)
				nc.push(this.matrix[x - 1][y - 1]);
			if ( !left && this.matrix[x - 1][y].alive)
				nc.push(this.matrix[x - 1][y]);
			if ( !up && !left && this.matrix[x - 1][y + 1].alive)
				nc.push(this.matrix[x - 1][y + 1]);
			if ( !up && this.matrix[x][y + 1].alive)
				nc.push(this.matrix[x][y + 1]);
			if ( !up && !right && this.matrix[x + 1][y + 1].alive)
				nc.push(this.matrix[x + 1][y + 1]);
			if ( !right && this.matrix[x + 1][y].alive)
				nc.push(this.matrix[x + 1][y]);
			if ( !down && !right && this.matrix[x + 1][y - 1].alive)
				nc.push(this.matrix[x + 1][y - 1]);
			return nc;
	}

	startGameLoop() {
		let that = this;
		window.setInterval(function() {
			that.updateGame();
		}, this.gameSpeed);
	}

	handlePauseClick() {
		this.setState({ paused: !this.state.paused });
	}

  	render() {
	    return (
	    	<div>
		    	<div>
			    	{this.state.matrix.map( function(column, i) {
			    		return <Column key={i} column={column} />
			    	})}
		    	</div>
		    	<input type="button" value={ this.state.paused ? "Start" : "Pause" }
		    		onClick={this.handlePauseClick.bind(this)} />
	    	</div>
		);
  	}
}