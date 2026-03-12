const http = require('http');

http.createServer((req, resp) => {
    
    resp.setHeader("Content-Type", "text/html");
    if(req.url === '/') {
    resp.write(`
        <form action = '/submit' method ="GET">
        <p>Made by Rishabh Paudel (24BCS10110)</p>
        <label for="fname">First Name:</label>
        <input type="text" placeholder="First Name" name="fname" /> <br /><br />
        <label for="lname">Last Name:</label>
        <input type="text" placeholder="Last Name" name="lname" /> <br /><br />
        <label for="address">Address:</label> <br />
        <textarea name="address" rows="4" placeholder="Address"></textarea> <br /><br />
        <button>Submit</button>        
        </form>
        `); }
    else if(req.url.startsWith("/submit")) {
        resp.write("<h3>Form Submitted</h3>");
    }  

    resp.end();
}).listen(1234);