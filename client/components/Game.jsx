/*
    ./client/components/Game.jsx
*/
import React from 'react';
import Column from '../components/Column.jsx';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
	}

  	render() {
	    return (<div>
	    	{this.props.matrix.map( function(column, i) {
	    		return <Column key={i} column={column} />
	    	})}
    	</div>);
  	}
}