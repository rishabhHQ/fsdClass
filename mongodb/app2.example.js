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
        await Product.create({      // .create of mongoose is .insertOne of mongo 
            name: "Watch",
            price: 2000,
            category: "fashon",
            stock: 100
        });
        console.log("Inserted one Product named Watch.");   // optinal but tells work is done

        await Student.insertMany([
            {name: "Phone1", price: 25000, category: "tech", stock: "10"},
            {name: "Book1", price: 550, category: "education", stock: 200},
            {name: "Shoes", price: 1000, category: "dailywear", stock: 20},
            {name: "MacBook", price: 80000, category: "tech", stock: 0}
        ]);
        console.log("Inserted many Products");      // optinal but tells work is done
        mongoose.connection.close();
    }
    catch (err) {
        console.err(err.message);
    }
}

// kind of main() function
mongoose.connect(uri, {dbName: "productdb"}).then(() => {
    console.log("Connected to Atlas");
    insertData();
}).catch(err => console.log(err));

// .then and .catch are promises just like try catch