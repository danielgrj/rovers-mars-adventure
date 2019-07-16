const chalk = require('chalk');
const readLineSync = require('readline-sync');
const Rover = require('./rover');
const getRandomCoordinates = require('./utils/getRandomCoordinates');

const start = () => {
    
    //Game intro
    console.log(chalk.cyan.inverse(' Rover\'s great adventure \n'))
    console.log(' Hello, operator. Rover has landed successfully on Mars, but now it needs your help to complete its mission. ');
    console.log(' Give Rover the directions it needs to arrive to its goal. But beware, Rover cannot turn and move at the same time. Think your orders carefully. ');
    console.log(chalk.magenta.inverse('\n Commands: '));
    console.log('\n  l = Turn left \n  r = Turn right \n  f = Move fordward ');

    const roverPosition = getRandomCoordinates();
    const goalPosition = getRandomCoordinates(roverPosition);

    let rover = new Rover({
        direction: 'N',
        position: roverPosition,
        goal: goalPosition
    });

    console.log(chalk.yellow.inverse('\n Rover needs to go from '), roverPosition, chalk.yellow.inverse(' to '), goalPosition);
    let orders = readLineSync.question('\n\n What should Rover do? \n'); 
    rover.move(orders);
    console.log('\n\n'+rover.result);

    console.log(chalk.green.inverse('\nRover\' journey'));
    console.log(rover.travelLog);
}

start();
