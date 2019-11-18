require('dotenv').config({ path: 'variables.env' });
const createserver = require('./createServer');
const db = require('./db');

const server = createserver();

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    }
}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`)
})
