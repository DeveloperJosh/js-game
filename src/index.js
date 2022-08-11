class Game {
    constructor(pixels) {
        this.pixels = pixels;
    }
    /// draw on the console the table
    draw() {
        //// draw the text on the console screen, check for errors
        for (let i = 0; i < this.pixels.length; i++) {
            for (let j = 0; j < this.pixels[i].length; j++) {
                process.stdout.write(this.pixels[i][j]);
            }
            process.stdout.write('\n');
        }
    }
    update(y, x, str) {
        /// check how many rows and columns the table has
        if (y >= this.pixels.length) {
            throw this.error('row out of range');
        }
        if (x >= this.pixels[y].length) {
            throw this.error('column out of range');
        }
        /// check if the cell is empty
        if (this.pixels[y][x] !== '  ') {
            throw this.error('cell is not empty');
        }
        /// update the cell
        this.pixels[y][x] = ` ${str} `;
    }

    /// error handling
    error(msg) {
        console.log(msg);
        process.exit(1);
    }

    board(pixels) {
        this.pixels = pixels;
    }
}

export default Game;