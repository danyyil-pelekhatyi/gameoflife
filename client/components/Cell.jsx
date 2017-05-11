export default class Cell {
	constructor(x, y, alive, aliveNeighbours, matrix) {
        this.x = x;
        this.y = y;
        this.alive = alive;
        this.aliveNeighbours = aliveNeighbours;
        this.matrix = matrix;
    }

    countNeighbours() {
    	let nc = 0,
    		up = this.y == matrix[0].length - 1,
    		down = this.y == 0,
    		left = this.x == 0,
    		right = this.x == matrix.length;
    		
    }
}