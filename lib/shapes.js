const fs = require('fs');
const writeFileSync = require('./document');

class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('Method must be implemented');
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="0,200 300,200 150,0" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
    
        const svgFile = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${svgContent}
<text x="150" y="120" text-anchor="middle" fill="blue" font-size="60">${text}</text>
</svg>`;

    fs.writeFileSync(`logo.svg`, svgFile, 'utf8');
    console.log(`logo.svg created!`);

module.exports = SVG;