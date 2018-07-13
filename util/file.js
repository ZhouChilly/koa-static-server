const fs = require('fs');
const iconv = require('iconv-lite');

let file = function(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  return content;
}

module.exports = file;
