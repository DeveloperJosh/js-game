const Game = require('./game');

const game = new Game([
    ['  ', '  ', '  '],
    ['  ', '  ', '  '],
    ['  ', '  ', '  ']
]);

game.update(0, 0, '1');
game.update(0, 1, '2');
game.update(0, 2, '3');
game.update(1, 0, '4');
game.update(1, 1, '5');
game.update(1, 2, '6');
game.update(2, 0, '7');
game.update(2, 1, '8');
game.update(2, 2, '9');
game.draw();