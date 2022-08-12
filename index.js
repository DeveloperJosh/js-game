const Game = require('./src');

const game = new Game([
    ['  ', '  ', '  '], /// row 0, column 0, 1, 2
    ['  ', '  ', '  '], /// row 1, column 0, 1, 2
    ['  ', '  ', '  ']  /// row 2, column 0, 1, 2
]);

game.update(0, 0, 'X');
game.update(0, 1, 'O');
game.update(0, 2, 'X');
game.update(1, 0, 'O');
game.update(1, 1, 'X');
game.update(1, 2, 'O');
game.update(2, 0, 'X');
game.update(2, 1, 'O');
game.update(2, 2, 'X');
game.draw();