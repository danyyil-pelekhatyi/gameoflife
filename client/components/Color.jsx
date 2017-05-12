export default class Color {
	constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    getColor() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`
    }
}