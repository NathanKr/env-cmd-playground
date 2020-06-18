const http = require('http');
const port = process.env.PORT;
console.log('app is loading')

const requestHandler= (request, response) => {
   response.writeHead(200, {'Content-Type': 'application/json'});
   response.write(JSON.stringify({mag : "hello"}));
   response.end();
}
http.createServer(requestHandler).listen(8080,()=>console.log(`app is listening on port : ${port}`));


