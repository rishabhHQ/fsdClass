const http = require('http');
http.createServer((req,resp) => {

    resp.setHeader("Content-Type", "text/html");
    if(req.url === '/') {
        resp.write(`                                    
            <form action ='/submit' method="POST">
            <input type="text" placeholder="Enter Name:" name="name" />
            <input type="text" placeholder="Enter Email:" name="email" />
            <button>Submit</button>
            </form>
            `); }
    // else if(req.url.startsWith("/submit")) {
    //     resp.write("<h3>Form Submitted</h3>");
    // }
    // for GET method use above

    else if(req.url == "/submit") {
        resp.write("<h3>Form Submitted</h3>");
    }
    // for POST method use above

    resp.end();

}).listen(3200);