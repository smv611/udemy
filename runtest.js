// simple example
// console.log('hello fron nodejs!')

// file system
    // let fs = require('fs');
    // fs.writeFileSync('test-File2.txt', 'xxxxxxxxxxxx');    


// http server
const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    //process.exit();;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>hello world!</h1>');
});
server.listen(3000);


