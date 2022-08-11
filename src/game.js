class Game {
    constructor(pixels) {
        this.pixels = pixels;
    }
    /// draw on the console the game
    draw() {
        //// draw the text on the console screen, check for errors
        for (let y = 0; y < 3; y++) {
            let line = '';
            for (let x = 0; x < 3; x++) {
                line += this.pixels[y][x];
            }
            console.log(line);
        } 
    }
    /// update the game
    update(y, x, str) {
        if (y < 0 || y > 2 || x < 0 || x > 2) {
            this.error('Invalid position');
        }
        if (this.pixels[y][x] !== '  ') {
            this.error('Position already taken');
        }
        this.pixels[y][x] = ` ${str} `; 
    }

    /// error handling
    error(msg) {
        console.log(msg);
        process.exit(1);
    }
}

module.exports = Game;