/*
    ./client/components/App.jsx
*/
import React from 'react';
import Game from '../components/Game.jsx';

const setup = `[2, 4] [2, 5] [3, 5] [3, 6] [4, 5] [4, 7] [5, 6] [5, 7] [6, 7] [7, 6] [7, 5] [7, 4] [6, 5] [5, 4]
  [5, 3] [5, 2] [6, 3] [4, 2] [2, 11] [2, 12] [3, 11] [3, 10] [4, 11] [4, 9] [4, 14] [5, 14] [5, 12] [5, 13] [5, 10]
  [5, 9] [6, 9] [6, 11] [6, 13] [7, 10] [7, 11] [7, 12] [9, 4] [9, 5] [9, 6] [9, 10] [9, 11] [9, 12] [10, 3] [10, 5]
  [10, 7] [10, 9] [10, 11] [10, 13] [11, 2] [11, 3] [11, 4] [11, 6] [11, 7] [11, 9] [11, 10] [11, 12] [11, 13] [11, 14]
  [12, 2] [12, 5] [12, 7] [12, 9] [12, 11] [12, 14] [13, 5] [13, 6] [13, 10] [13, 11] [14, 4] [14, 5] [14, 11] [14, 12]`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.width = 140;
    this.height = 70;
    this.matrix = []
    for (let x = 0; x < this.width; x++) {
      let column = [];
      for (let y = 0; y < this.height; y++) {
        if (setup.indexOf(`[${x}, ${y}]`) > -1)
          column.push(true)
        else 
          column.push(false)
      }
      this.matrix.push(column)
    }
    this.state = {
      matrix: this.matrix
    }
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Welcome To the Game of Life!</h1>
        <Game matrix={this.state.matrix} />
      </div>
    );
  }
}