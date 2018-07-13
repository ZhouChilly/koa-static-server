const url = require('url');
const fs = require('fs');
const path = require('path');

const walk = require('./walk');

let dir = function(url, reqPath) {
  let contentList = walk(reqPath);
  let html = `<ul>`;
  for (let [index, item] of contentList.entries()) {
    html = `${html}<li><a href="${url === '/' ? '' :url}/${item}">${item}</a></li>`
  }
  html = `${html}</ul>`;
  return html;
}

module.exports = dir;
