const http = require('http');
http.createServer((req,resp) => {       // request and responce


    console.log(req.url);
    console.log(req.headers.host);      // root doamin name
    console.log(req.method);
    




    resp.write("<h1>Hello, this made from node js</h1>");    

    

    // this is very important otherwise page will be in always reloading
    resp.end("Learning Node");          // very important
    // resp.end()                       // this will also work

}).listen(4800);                        // binds to particular port (4800 in this case)

// 06-03-2026

const http2 = require('http');
http2.createServer((req,resp) => {       

    console.log(req.url);

    resp.setHeader("content-Type", "text/html");        // this will fix the error which was comin without this
    resp.write("<h2>Hello, this made from node js and this has different port now its nodemon</h2>");    

    resp.end("Learning Node");              

}).listen(5800);                        