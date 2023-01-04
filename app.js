const http = require('http');

const server= http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Welcome to my Node Js project</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);