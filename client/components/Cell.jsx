export default class Cell {
	constructor(x, y, alive, color) {
        this.x = x;
        this.y = y;
        this.alive = false;
        this.neighbours = 0;
        this.willSurvive = alive;
        this.color = color;
    }

    updateCell(callback) {
    	this.alive = this.willSurvive;
    	this.willSurvive = null;
    	callback();
    }

    setNeighbours(n) {
    	this.neighbours = n;
    	this.willSurvive = this.alive ? ( [2, 3].indexOf(n.length) > -1 ) : n.length == 3;

    	let turnConsoleOff = true;
    	if (this.alive && !turnConsoleOff) {
    		console.log(`Cell[${this.x}, ${this.y}] with ${n} neighbours will ${this.willSurvive ? "survive" : "die"}.`);
    	} else {
    		if (this.willSurvive && !turnConsoleOff) {
    			console.log(`Cell[${this.x}, ${this.y}] with ${n} neighbours will be born to life.`);
    		}
    	}
    }

}