const inquirer = require('inquirer');

class CLI {
    run() {
      return inquirer
       .prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Please enter your name',
            validate: (input) => input.length <= 3
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for your text:'
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Pick a shape:',
            choices: ['circle', 'triangle', 'square']
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for your shape:'
          }
        ])
       .then((response) => {
          console.log('logo.svg created!');
        });
    }
  }
  
  module.exports = CLI;