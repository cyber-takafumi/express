var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  const qrUrl =
    'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=CyberUniversity';

  res.send(`
    <html>
      <body>
        <h1>QR Code API</h1>
        <img src="${qrUrl}">
      </body>
    </html>
  `);

});

module.exports = router;

