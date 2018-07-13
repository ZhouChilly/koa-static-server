const Koa = require('koa');
const path = require('path');

const content = require('./util/content');
const mimes = require('./util/mimes');

const app = new Koa();

const staticPath = './static';

let parseMime = function(url) {
  let extName = path.extname(url);
  extName = extName ? extName.slice(1) : 'unknown';
  return mimes[extName];
}

app.use(async (ctx) => {
  let fullStaticPath = path.join(__dirname, staticPath);
  let _content = await content(ctx, fullStaticPath);
  let _mime = parseMime(ctx.url);
  if (_mime) {
    ctx.type = _mime;
  }
  if (_mime && _mime.indexOf('image/') !== -1) {
    ctx.res.writeHead(200);
    ctx.res.write(_content, 'binary');
    ctx.res.end();
  } else {
    ctx.body = _content;
  }
});

app.listen(3000, () => {
  console.log('static-server is starting at port 3000');
});
