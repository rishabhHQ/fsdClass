const mongoose = require("mongoose");
const uri = "mongodb+srv://paudel_83:rishabh@cluster0.jfna4lh.mongodb.net/schooldb";            // connection string

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});     // defined schema (i.e structure of database)

const Student = mongoose.model("students", studentSchema);  // parameters: (collection name, schema)

async function insertData() {
    try {
        await Student.create({      // .create of mongoose is .insertOne of mongo 
            name: "Rahul",
            age: 21,
            course: "B.Tech"
        });
        console.log("Inserted one Student.");   // optinal but tells work is done

        await Student.insertMany([
            {name: "Aman", age: 19, course: "BCA"},
            {name: "Raman", age: 20, course: "B.Com"}
        ]);
        console.log("Inserted many Students");      // optinal but tells work is done
        mongoose.connection.close();
    }
    catch (err) {
        console.err(err.message);
    }
}

// kind of main() function
mongoose.connect(uri, {dbName: "schooldb"}).then(() => {
    console.log("connected to Atlas");
    insertData();
}).catch(err => console.log(err));

// .then and .catch are promises just like try catch