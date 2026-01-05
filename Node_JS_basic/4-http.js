const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // En-tête de la réponse
  res.end('Hello Holberton School!'); // Corps de la réponse
});

app.listen(1245);

module.exports = app;
