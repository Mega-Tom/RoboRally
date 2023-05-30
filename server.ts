import express = require("express");

const port = 3000;

const app = express();
app.use(express.static('webroot'))
   .use(express.static('build/webroot'))
   .listen(port, () => {
        console.log(`Server running on port ${port}`);
    });