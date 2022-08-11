import Game from "./src/index.js";

const game = new Game([
    ['  ', '  ', '  '], /// row 0, column 0, 1, 2
    ['  ', '  ', '  '], /// row 1, column 0, 1, 2
    ['  ', '  ', '  ']  /// row 2, column 0, 1, 2
]);

game.update(0, 0, '1'); /// update the cell (0, 0) with the value '1'
game.update(0, 1, '2'); /// update the cell (0, 1) with the value '2'
game.update(0, 2, '3'); /// update the cell (0, 2) with the value '3'
game.update(1, 0, '4'); /// update the cell (1, 0) with the value '4'
game.update(1, 1, '5'); /// update the cell (1, 1) with the value '5'
game.update(1, 2, '6'); /// update the cell (1, 2) with the value '6'
game.update(2, 0, '7'); /// update the cell (2, 0) with the value '7'
game.update(2, 1, '8'); /// update the cell (2, 1) with the value '8'
game.update(2, 2, '9'); /// update the cell (2, 2) with the value '9'
game.draw(); /// draw the table on the console