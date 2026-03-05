const http = require('http');
http.createServer((req,resp) => {       // request and responce

    resp.write("<h1>Hello, this made from node js</h1>");    

    // this is very important otherwise page will be in always reloading
    resp.end("Learning Node");          // very important
    // resp.end()                       // this will also work

}).listen(4800);                        // binds to particular port (4800 in this case)