{/**STORE THE SAME NAME/VAR 'MODEL' TO THE SAME NAME 'COLLECTIONNAME'
//CAN ONLY RUN 'let Model = mongoose.model(CollectionName, Schema);' ONLY ONE TIME
//CAN ONLY LET 'let Model' BE 'CollectionName' ONCE!
YOUR GOING TO MAKE SURE THE MODEL DOES NOT GET CALLED WITH THE SAME 'CollectionName'*/}
const { Schema } = mongoose; //TYPE OF MONGOOSE.SCHEMA i.e. NEW MONGOOSE.SCHEMA

//$$$$$$ COMPLETED - PASS CORRECT ARGUMENTS AND IT WILL SCHEMA TO MODEL TO SAVE.
async function sechmaToModelToSave(SchemaObject, CollectionName, DataObject ) { 
    try {
        console.log('sechmaToModelToSave ran');
        if( !(modelNameFind(CollectionNamesArray, CollectionName)) ) {
            console.log('!(modelNameFind(CollectionNamesArray, CollectionName)) NOT FROUND') //i.e. collection name has just been stored.
            CollectionNamesArray.push(CollectionName);
            const Schema = new mongoose.Schema(SchemaObject);
            let Model = mongoose.model(CollectionName, Schema);
            const document = new Model(DataObject);
            await document.save();
            return 1;
        }
        else {
            console.log('!(modelNameFind(CollectionNamesArray, CollectionName)) FOUND') //i.e. collection name already exisxt.
             return 0;
        }
    } catch(err) {
        console.log('err from sechmaToModelToSave - ' + err);
        return err;
    }
}

//CURRENTLY WORK ON THIS NEXT @@@@@
// async function registerUser(username, password) {
//     await sechmaToModelToSave({
//         username: String,
//         password: String,
//     },
//     'collectionName', 
//     {
//         username: username,
//         password: password
//     });
// }

function modelNameFind(CollectionNamesArray, CollectionName) {
    return equate(CollectionNamesArray, CollectionName)
}

function equate (eqaute1, eqaute2) { 
    if (eqaute1 == eqaute2 )  { return true }
    else { return false }
}

//FILL THIS OUT         CHECK IF THE MODEL ALREADY EXIST BY CHECKING IF IT IS IN THE ARRAY*create arrary
function checkIfModelhasRunTheSameCollection() {
}

//IF CONNECTED TO CLUSTER0'S WEBSITE DATABASE
async function searchFiles() {
    console.log('>>>????')
    const FileSchema = new mongoose.Schema
    ({
        FileName: { type: String, required: true, min: 4, max: 26 },
        Extention: { type: String, required: true, min: 1, max: 12 }
    });
    console.log('>>>????')
    const File = mongoose.model('File', FileSchema);
    const search = await File.find();


    console.log(search);
}

async function schemaExampleObjectStyle () {

    const blogSchema = new Schema
    ({
        title:  String, // String is shorthand for {type: String}
        author: String,
        body:   String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
          votes: Number,
          favs:  Number
        }
    });

    const Blog = mongoose.model('Blog', blogSchema); //mongoose.model(modelName, schema):
}
async function saveAnd () {

    const blogSchema = new Schema
    ({
        title:  String, // String is shorthand for {type: String}
        author: String,
        body:   String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
          votes: Number,
          favs:  Number
        }
    });

    const Blog = mongoose.model('Blog', blogSchema); //mongoose.model(modelName, schema):
}



// const express = require ('express');
// const app = express();
// const port = 5000;

// const path = require('path');

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });


