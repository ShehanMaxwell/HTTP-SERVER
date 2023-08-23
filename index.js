const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/friends') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        id: 1,
        name: 'Maxwell',
      })
    );
  } else if (req.url === '/messages') {
    // Corrected URL path
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Maxwell</li>');
    res.write('<li>You gonna ACE the interview</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end(); // Properly close the response
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
