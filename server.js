const express = require(`express`);
const PORT = require(`./config`).PORT;

const db = require(`./db`);
const server = express();

//middleware
server.use(express.json());

db();

server.listen(PORT, (err) => {
    if(err) {
        console.log(`Error starting server on port: ${PORT}`);
    }
    console.log(`Server listening on port: ${PORT}`);
});