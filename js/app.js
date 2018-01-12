// Enemies our player must avoid
var Enemy = function(row,level) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = row * 83 -20;
    this.level = level;
    this.speed = getRandomSpeed(this.level);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-cat-girl.png';
    this.x = 0;
    this.y = 395;
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.update = function(){
    this.render();
}

Player.prototype.handleInput = function (keyCode){
    switch (keyCode) {
        case 'left':
            this.x = this.x - 101 < 0 ? 0: this.x - 101;
            break;

        case 'up':
            this.y = this.y - 83 < - 20 ? -20: this.y-83;
            break;

        case 'right':
            this.x = this.x + 101 > 404 ? 404: this.x + 101;
            break;

        case 'down':
            this.y = this.y + 83 > 395 ? 395: this.y + 83;
            break;

        default:
            return;
    }
    this.update();
}

function getRandomSpeed(level) {
    let max = 0;
    let min = 0;
    switch(level){
        case 0:
            max=250;
            min=150;
            break;
        case 1:
            max=300;
            min=250
            break;
         default:
            max=450;
            min=300;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(1,0), new Enemy(2,0),new Enemy(3,0)];

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
