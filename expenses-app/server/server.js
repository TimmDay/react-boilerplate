const express = require('express'); // node style import
const path = require('path');

const app = express(); //create new instance
const publicPath = path.join(__dirname, '..', 'public');

// where files live
//what port to listen on

app.use(express.static(publicPath)); //serve up all assets from public directory

app.listen(3000, () => {
    console.log('Express server is up');
}); //listen to this port