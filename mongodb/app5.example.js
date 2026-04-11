const mongoose = require("mongoose");
const uri = "mongodb+srv://<your_username>:<your_db_password>@cluster0.jfna4lh.mongodb.net/productdb";            // connection string

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    stock: Number
});     // defined schema (i.e structure of database)

const Product = mongoose.model("product", productSchema);  // parameters: (collection name, schema)

async function insertData() {
    try {
        const showDocs = await Product.find();
        console.log(`Number of documents: ${showDocs}`);
        mongoose.connection.close();
    }
    catch (err) {
        console.log(err.message);
    }
}

// kind of main() function
mongoose.connect(uri, {dbName: "productdb"}).then(() => {
    console.log("Connected to Atlas");
    insertData();
}).catch(err => console.log(err));

// .then and .catch are promises just like try catch