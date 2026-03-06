const http = require('http');
http.createServer((req,resp) => { 

    console.log(req.url);
    console.log(req.headers.host);      // root doamin name
    console.log(req.method);

    resp.write("<h1>Hello, this made from node js</h1>");    
    resp.end("Learning Node");          
    // resp.end()                       

}).listen(4800);                        