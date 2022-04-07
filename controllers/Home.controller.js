const path = require('path');

const Home_get = async (req, res, next ) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}
 
exports.Home_get = Home_get;
