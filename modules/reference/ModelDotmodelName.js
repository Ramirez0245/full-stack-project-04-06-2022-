//STORE THE SAME NAME/VAR 'MODEL' TO THE SAME NAME 'COLLECTIONNAME'
//CAN ONLY RUN 'let Model = mongoose.model(CollectionName, Schema);' ONLY ONE TIME
//CAN ONLY LET 'let Model' BE 'CollectionName' ONCE!
//YOUR GOING TO MAKE SURE THE MODEL DOES NOT GET CALLED WITH THE SAME 'CollectionName'
async function sechmaToModelToSave(SchemaObject, CollectionName, DataObject ) { 
    try {
        console.log('sechmaToModelToSave ran');
        const Schema = new mongoose.Schema(SchemaObject);
        
        let Model = mongoose.model(CollectionName, Schema);

        const document = new Model(DataObject);
        await document.save();
        console.log(Model); // Model { users }
        ArrayModel.push(Model);
        if (ArrayModel.includes(Model.modelName)) {
            console.log('ArrayModel.includes(Model) came out to be TRUE!')
        }
        console.log(Model.inspect());  // [ Model { collectionName } ]
        console.log(ArrayModel);
        console.log('sechmaToModelToSave ended');
        return '200';
    } catch(err) {
        console.log('err from sechmaToModelToSave' + err);
        return err;
    }
}

//  THIS RUNS IF CONNECTED TO DATABASE