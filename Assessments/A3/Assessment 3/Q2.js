const express = require('express');
const app = express();

app.get("/", (req,resp) => {
    resp.send(`
        <h4>Home Page</h4>
        <p>Welcome to rishabhhq<p>
        <p>Made by Rishabh Paudel (24BCS10110)</p>
    `);
});
app.get("/helpline", (req,resp) => {
    resp.send(`
        <h4>Helpline Page</h4>
        <p>For Help and Support: hq.helpndsupport@rhq.com</p>
        <p>For Business Inqueries: hq.businessinq@rhq.com</p>
        <p>Other: hq.otherinq@rhq.com</p>
        <p>Made by Rishabh Paudel (24BCS10110)</p>
    `);
});
app.get("/about", (req,resp) => {
    resp.send(`
        <h4>About Page</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci delectus quo molestiae aliquid dicta molestias ducimus voluptatum pariatur, numquam consectetur labore excepturi repudiandae recusandae voluptate rerum nihil commodi error.</p>
        <p>Made by Rishabh Paudel (24BCS10110)</p>
    `);
});
app.listen(5678);