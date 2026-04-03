const mongoose = require("mongoose");
const uri = " ";            // connection string

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});     // defined schema (i.e structure of database)

const Student = mongoose.model("students", studentSchema);  // parameters: (collection name, schema)

async function insertData() {
    try {
        await Student.create({
            name: "Rahul",
            age: 21,
            course: "B.Tech"
        });
        console.log("Inserted one Student.");

        await Student.insertMany([
            {name: "Aman", age: 19, course: "BCA"},
            {name: "Raman", age: 20, course: "B.Com"}
        ]);
        console.log("Inserted many Students");
    }
    catch (err) {
        console.err(err.message);
    }
}

mongoose.connect(uri, {dbName: "schooldb"}).then(() => {
    console.log("connected to Atlas");
    insertData();
}).catch(err => console.log(err));  
