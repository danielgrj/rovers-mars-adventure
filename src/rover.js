const chalk = require('chalk');

class Rover {
    constructor({ direction, position, goal }){
        this.direction = direction;
        this.position = position;
        this.goal = goal;
        this.travelLog = [{
            x: position.x,
            y: position.y
        }];
        this.cardinalDirections = ['N', 'E', 'S', 'W'];
    }

    move(orders) {
        const arrayOrders = orders.toLowerCase().split('');
        for(let i = 0; i < arrayOrders.length; i++){
            switch(arrayOrders[i]){
                case 'l':
                    this.turnLeft.call(this);
                    break;
                case 'r':
                    this.turnRight.call(this);
                    break;
                case 'f':
                    this.goForward.call(this);
                    break;
            }
        }

        if(this.position.x === this.goal.x && this.position.y === this.goal.y){
            this.result = chalk.green.inverse(' Successs! ')+chalk.green(' Rover has reached its goal. ');
        } else {
            this.result = chalk.red.inverse(' Failure. ')+chalk.red(' Rover is now lost in Mars ')
        }
    }

    goForward() {
        const { direction, position } = this;
        switch(direction){
            case 'N':
                if(position.y === 0) return; 
                position.y -= 1;
                break;
            case 'E':
                if(position.x === 9) return;
                position.x += 1; 
                break;
            case 'S':
                if(position.y === 9) return;
                position.y += 1;
                break;
            case 'W':
                if(position.x === 0) return;
                position.x -= 1;
                break;
        }
        this.travelLog.push({
            x: position.x,
            y: position.y
        });
        this.position = position;
    }

    turnLeft() {
        const cardinalPoint = this.cardinalDirections.indexOf(this.direction);
        if(cardinalPoint === 0){
            this.direction = this.cardinalDirections[3]; 
        } else {
            this.direction = this.cardinalDirections[cardinalPoint-1]
        }
    }
    
    turnRight() {
        const cardinalPoint = this.cardinalDirections.indexOf(this.direction);
        if(cardinalPoint === 3){
            this.direction = this.cardinalDirections[0]; 
        } else {
            this.direction = this.cardinalDirections[cardinalPoint+1]
        }
    }
}

module.exports = Rover;