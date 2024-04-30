const inquirer = require('inquirer');
const { SVG } = require('./shapes');

class CLI {
    run() {
      return inquirer
       .prompt([
          {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            // This only allows 3 characters to be accepted.
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
          const svg = new SVG();
          svg.generateSvg(response);
        });
    }
  }
  
  module.exports = CLI;