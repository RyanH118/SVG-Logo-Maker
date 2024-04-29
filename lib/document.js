const fs = require('fs');

// file is the name of the file we want, data is the content for the file, and encoding is for utf8.
function writeFileSync(file, data, encoding) {
    fs.writeFileSync(`logo.svg`, svgFile, 'utf8');
  }
  
  module.exports = writeFileSync;