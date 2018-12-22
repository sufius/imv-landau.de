const fs = require('fs');
const http = require('http')
const port = 3001

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/json',
  	'Access-Control-Allow-Origin': '*',
  	'X-Powered-By':'nodejs'
  });

  fs.readdir("public/uploads/photos", function(err, items) {
      const result = {
        data: items
      }
      response.write(JSON.stringify(result));
      response.end();
  });
}).listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})