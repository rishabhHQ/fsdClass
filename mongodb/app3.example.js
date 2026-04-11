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
        await Product.updateOne(
            {stock: 20}, {$set:{price: 5000}}
        );
        console.log("Updated Successfully");   // optinal but tells work is done
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