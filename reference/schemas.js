const mongoose = require('mongoose');
const { TopologyType } = require('mongoose/node_modules/mongodb');

module.exports.schemaExampleMONGOOSEdotSCHEMA = async function schemaExampleMONGOOSEdotSCHEMA() {
    // mongoose.connection.close();
    // connectToHostDatabase(host, 'connectDummy')
        //SCHEMA
        const kittySchema = new mongoose.Schema({
            name: String,
            name2: String
        });
        console.log(kittySchema);
        console.log('After KittySchema');
        //FUNCTIONALITY ADDITION TO SCHEMA
        kittySchema.methods.speak = function speak() {
            const greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
            console.log(greeting);
        };

        //MODEL     SCHEMA TO MODEL
        console.log('? start')
        const Kitten2 = mongoose.model('Kittennnnnnn3', kittySchema);
        let Kitten4 = Kitten2;
        console.log('?2')
        const Kitten3 = mongoose.model('Kittennnnnnn3', kittySchema);
        //DOCUMENT
        const silence = new Kitten2({ name: 'Silence2', name2: 'Bob' });
        const fluffy = new Kitten3({ name: 'fluffy2', name2: 'Bob' });
        console.log(silence.name);


        //SAVE
        await fluffy.save();
        await silence.save();
        fluffy.speak();
        //SEARCH
        const kittens = await Kitten4.find();
        Kitten4 = Kitten3;
        let kittensPlus = 
        console.log(kittens);

        //KEY PATH ADDITION
        const catSchema = mongoose.Schema({
            name: String
        });
        catSchema.add({color: String});
        const Cat = mongoose.model('Catty', catSchema);
        const quadratic = new Cat({name: 'quadratic', color: 'black'})
        console.log(`Hello my name is ${quadratic.name} and I have ${quadratic.color} hair`)
        console.log(kittens.length);
};

