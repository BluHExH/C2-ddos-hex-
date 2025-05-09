
const http = require('http');
setInterval(() => {
  http.get('http://example.com', (res) => {
    res.on('data', () => {});
  }).on('error', () => {});
}, 1);
