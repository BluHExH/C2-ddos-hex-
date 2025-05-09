
const https = require('https');
setInterval(() => {
  for (let i = 0; i < 500; i++) {
    https.get('https://example.com');
  }
}, 10);
